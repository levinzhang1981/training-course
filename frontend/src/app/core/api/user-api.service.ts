import {Injectable} from '@angular/core';
import {User} from '../../shared/model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  /**
   * Communicate with backend to create new user record
   * @param user user for creating
   */
  create(user: User): Observable<User> {
    return this.httpClient.post<User>('/user', user);
  }

  /**
   * Login backend with given user form value
   * @param loginFormValue value of login form
   */
  login(loginFormValue: any): Observable<any> {
    return this.httpClient.post<any>(`/login?username=${loginFormValue.username}&password=${loginFormValue.password}`, {});
  }
}
