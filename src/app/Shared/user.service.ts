import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {User} from './User.model';
import {environment} from '../../environments/environment';
import {AuthenticationService} from "./services/authentication.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getUsers(): Observable<User[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<User[]>(environment.baseURL + '/users', httpOptions);
  }
  getUserById(id: number): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<User>(environment.baseURL + '/users' + '/' + id, httpOptions);
  }
}
