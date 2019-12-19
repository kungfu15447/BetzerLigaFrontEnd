import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tournament} from '../../Shared/Tournament.model';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from "../../Shared/services/authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tourURL = environment.baseURL + 'tournaments';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getTour(id: number): Observable<Tournament> {
    const url = `${this.tourURL}/${id}`;
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Tournament>(url, httpOptions);
  }

  getAllTour(): Observable<Tournament[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Tournament[]>(this.tourURL, httpOptions);
  }

  addTour(tour: Tournament): Observable<Tournament> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Tournament>(this.tourURL, tour, httpOptions);
  }

  updateTour(tour: Tournament): Observable<Tournament> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    const url = `${this.tourURL}/${tour.id}`;
    return this.http.put<Tournament>(url, tour, httpOptions);
  }

  deleteTour(id: number): Observable<Tournament> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    const url = `${this.tourURL}/${id}`;
    return this.http.delete<Tournament>(url, httpOptions);
  }
}
