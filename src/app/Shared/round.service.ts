import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Round} from './Round.model';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  apiUrl = 'http://localhost:53548/api'
  constructor(private http: HttpClient) { }

  getRounds(): Observable<Round[]> {
    return this.http.get<Round[]>
    (this.apiUrl + '/rounds');
  }
}
