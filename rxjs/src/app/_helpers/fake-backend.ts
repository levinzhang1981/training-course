import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

// array in local storage for registered users
let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url, method, headers, body} = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(600))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.match(/\/users[?]?.*$/) && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.endsWith('/users') && method === 'POST':
                    return createUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        function getUsers() {
            const parsedUrl = new URL(url);
            const filterValue = parsedUrl.searchParams.get("filter");
            if (filterValue) {
                console.log(`Backend process request with filter value = [${filterValue}]`);
                return ok(users.filter(x => `${x.id}`.indexOf(filterValue) > -1));
            }
            return ok(users);
        }

        function getUserById() {
            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function createUser() {
            const id = Math.round(Math.random() * 1000);

            users.push({
                firstName: 'Foo',
                lastName: 'Bar',
                username: `user#${id}`,
                id: id
            })
            localStorage.setItem('users', JSON.stringify(users));
            return ok(users);
        }

        // helper functions
        function ok(body?) {
            return of(new HttpResponse({status: 200, body}))
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};