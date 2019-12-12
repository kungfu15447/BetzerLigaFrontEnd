import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {TournamentService} from '../shared/tournament.service';
import {take} from 'rxjs/operators';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[];
  onGoingTournaments: Tournament[] = [];
  newTournaments: Tournament[] = [];
  loading: boolean;
  loggedInUser: User;

  constructor(private tourService: TournamentService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.getTours();
    this.loggedInUser = this.authService.getUser();
  }

  getTours(): void {
    this.loading = true;
    this.tourService.getAllTour('fisk')
      .pipe(
        take(1)
      )
      .subscribe(
        tournaments => {this.tournaments = tournaments;
                        this.getOnGoingTours();
                        this.getNewTournaments();
                        this.loading = false;
      });
  }

  getOnGoingTours(): void {
    this.onGoingTournaments = [];
    const currentDateTime = new Date().valueOf();
    this.tournaments.forEach( (tournament) => {
      const startDateTime = new Date(tournament.startDate).valueOf();
      if (startDateTime < currentDateTime && !tournament.isDone) {
        this.onGoingTournaments.push(tournament);
      }
    });
  }

  getNewTournaments(): void {
    this.newTournaments = [];
    const currentDateTime = new Date().valueOf();
    this.tournaments.forEach((tournament) => {
      const startDateTime = new Date(tournament.startDate).valueOf();
      if (startDateTime > currentDateTime) {
        this.newTournaments.push(tournament);
      }
    });
  }

  deleteTour(id: number): void {
    this.tourService.deleteTour(id)
      .subscribe( () => {
        this.getTours();
      });
  }
}
