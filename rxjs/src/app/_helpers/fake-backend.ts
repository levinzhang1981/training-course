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
                case url.match(/\/users\/.+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/.+$/) && method === 'DELETE':
                    return deleteUserById();
                case url.endsWith('/users') && method === 'POST':
                    return createUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        function getUsers() {
            const parsedUrl = new URL(url);
            const nameFilter = parsedUrl.searchParams.get("nameFilter");
            const ageFilter = parsedUrl.searchParams.get("ageFilter");
            console.log(`Backend process request with filter value = [${nameFilter}]`);
            // return ok(users.filter(x => `${x.name}`.indexOf(filterValue) > -1));
            return ok(users.filter(x => {
                if (ageFilter && x.age > ageFilter) {
                    return false;
                }

                if (nameFilter && `${x.username}`.toLowerCase().indexOf(nameFilter) === -1) {
                    return false;
                }
                return true
            }));
        }

        function getUserById() {
            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function deleteUserById() {
            const userIdx = users.findIndex(x => x.id === idFromUrl());
            users = users.splice(userIdx, 1);
            localStorage.setItem('users', JSON.stringify(users));
            return ok(users);
        }

        function createUser() {
            if (body) {
                users.push(body);
            } else {
                const id = Math.round(Math.random() * 1000);
                users.push({
                    firstName: 'Foo',
                    lastName: 'Bar',
                    username: `user${id}`,
                    age: Math.round(Math.random() * 60),
                    id: id
                })
            }

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