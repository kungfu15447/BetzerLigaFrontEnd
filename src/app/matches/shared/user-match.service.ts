import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {Match} from '../../Shared/Match.model';
import {environment} from '../../../environments/environment';
import {UserMatch} from '../../Shared/UserMatch.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserMatchService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

              apiUrl = environment.apiUrl
              addUserMatch(userMatches: UserMatch[]) {
                this.http.post<Match>(this + 'Matches/', userMatches);
              }
}
