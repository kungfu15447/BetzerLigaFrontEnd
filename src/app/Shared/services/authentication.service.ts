import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {User} from '../User.model';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.baseURL + 'Token', { username, password })
      .pipe(map(response => {
        const token = response.token
        const user = response.user;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ user, token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.user;
  }
  setUser(user: User): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token;
    localStorage.setItem('currentUser', JSON.stringify({ user, token }));
  }

    logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
