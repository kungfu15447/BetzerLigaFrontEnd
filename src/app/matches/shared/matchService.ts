import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {Observable} from 'rxjs';
import {Match} from '../../Shared/Match.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  URL = environment.baseURL;
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.getMatches();
  }
  addMatch(match: Match[]): Observable<Match[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Match[]>(this.URL + 'matches', match);
  }

  getMatches(): Observable<Match[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Match[]>(this.URL + 'matches', httpOptions);
  }
  getMatch(id: number): Observable<Match[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Match[]>(this.URL + 'matches/' + id, httpOptions);
  }
  delete(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.URL + 'matches/' + id, httpOptions);
  }
  updateMatch(match: Match[]): Observable<Match[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Match[]>(this.URL + 'matches/' , match, httpOptions);
  }

  getMatchesFromRound(userId: number, roundId: number): Observable<Match[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Match[]>(this.URL + 'matches?userId=' + userId + '&roundId=' + roundId, httpOptions);
  }
}
