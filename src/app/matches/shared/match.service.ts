import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from '../../Shared/Match.model';
import {User} from '../../Shared/User.model';
import {Round} from '../../Shared/Round.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:53548/api/matches';

  getMatchByCurrentRoundAndByUser(user: User): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl + '?userId' + user.id + '&hello=k');
}
}
