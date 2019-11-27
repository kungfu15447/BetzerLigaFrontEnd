import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tournament} from '../../Shared/Tournament.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private tourURL = '';
  constructor(private http: HttpClient) { }

  getTour(id: number): Observable<Tournament> {
    const url = `${this.tourURL}/${id}`
    return this.http.get<Tournament>(url);
  }
}
