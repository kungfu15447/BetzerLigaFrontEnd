import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tournament} from '../../Shared/Tournament.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tourURL = environment.apiUrl + 'tournaments';
  constructor(private http: HttpClient) { }

  getTour(id: number): Observable<Tournament> {
    const url = `${this.tourURL}/${id}`
    return this.http.get<Tournament>(url);
  }

  getAllTour(query: string): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tourURL + '?tournament=' + query);
  }

  addTour(tour: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.tourURL, tour);
  }
}
