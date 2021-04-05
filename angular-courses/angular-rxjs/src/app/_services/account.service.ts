import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {environment} from '../../environment';
import {User} from '../_models';

@Injectable({providedIn: 'root'})
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    getAll(nameFilter = "", ageFilter?: number) {
        return this.http.get<User[]>(`${environment.apiUrl}/users?nameFilter=${nameFilter}&ageFilter=${ageFilter}`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }

    generateUser() {
        return this.http.get('https://randomuser.me/api/')
            .pipe(
                map(response => response['results'][0]),
                map<any, User>(netUser => ({
                    id: netUser['login']['uuid'],
                    username: netUser['login']['username'],
                    password: netUser['login']['password'],
                    firstName: netUser['name']['first'],
                    lastName: netUser['name']['last'],
                    email: netUser['email'],
                    age: netUser['dob']['age'],
                })),
                switchMap((user) => this.http.post<User[]>(`${environment.apiUrl}/users`, user))
            );

        // return this.http.post<User[]>(`${environment.apiUrl}/users`, {});
    }
}