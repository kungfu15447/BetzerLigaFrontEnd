import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Round} from '../../Shared/Round.model';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  apiUrl = 'http://localhost:53548/api/rounds';

  constructor(private http: HttpClient) { }

  getRounds(): Observable<Round[]> {
    return this.http.get<Round[]>
    (this.apiUrl);
  }

  deleteRound(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' + id );
  }
}
