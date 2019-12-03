import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Round} from '../../Shared/Round.model';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  apiUrl = 'http://localhost:56761/api/rounds';

  constructor(private http: HttpClient) { }

  getRounds(): Observable<Round[]> {
    return this.http.get<Round[]>
    (this.apiUrl);
  }

  getOneRound(id: number): Observable<Round> {
    return this.http.get<Round>(this.apiUrl + '/' + id);
  }

  addRound(round: Round): Observable<Round> {
    return this.http.post<Round>(this.apiUrl, round);
  }

  deleteRound(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id );
  }

  updateRound(round: Round): Observable<Round> {
    return this.http.put<Round>(this.apiUrl + '/' + round.id, round);
  }

  getCurrentRound(): Observable<Round[]> {
    return this.http.get<Round[]>(this.apiUrl + '?tournament=tour');
  }
}
