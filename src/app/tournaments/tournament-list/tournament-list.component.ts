import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {TournamentService} from '../shared/tournament.service';
import {take} from 'rxjs/operators';
import {start} from 'repl';

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

  constructor(private tourService: TournamentService) { }

  ngOnInit() {
    this.getTours();
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
    const currentDateTime = new Date().valueOf();
    this.tournaments.forEach( (tournament) => {
      const startDateTime = new Date(tournament.startDate).valueOf();
      if (startDateTime < currentDateTime && !tournament.isDone) {
        this.onGoingTournaments.push(tournament);
      }
    });
  }

  getNewTournaments(): void {
    const currentDateTime = new Date().valueOf();
    this.tournaments.forEach((tournament) => {
      const startDateTime = new Date(tournament.startDate).valueOf();
      if (startDateTime > currentDateTime) {
        this.newTournaments.push(tournament);
      }
    });
  }
}
