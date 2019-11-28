import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {User} from './User.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + '/users');
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/users' + '/' + id);
  }
}
