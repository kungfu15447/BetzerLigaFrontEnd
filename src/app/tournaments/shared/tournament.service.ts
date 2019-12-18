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

  getAllTour(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tourURL);
  }

  addTour(tour: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.tourURL, tour);
  }

  updateTour(tour: Tournament): Observable<Tournament> {
    const url = `${this.tourURL}/${tour.id}`;
    return this.http.put<Tournament>(url, tour);
  }

  deleteTour(id: number): Observable<Tournament> {
    const url = `${this.tourURL}/${id}`;
    return this.http.delete<Tournament>(url);
  }
}
