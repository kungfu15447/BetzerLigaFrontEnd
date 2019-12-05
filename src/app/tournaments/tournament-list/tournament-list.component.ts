import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {TournamentService} from '../shared/tournament.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[];
  onGoingTournaments: Tournament[] = [];
  newTournaments: Tournament[] = [];

  constructor(private tourService: TournamentService) { }

  ngOnInit() {
  }

  getTours(): void {
    this.tourService.getAllTour('currentTournament')
      .pipe(
        take(1)
      )
      .subscribe(tournaments => this.tournaments = tournaments);
  }

  getOnGoingTours(): void {
    this.tournaments.forEach( (tournament) => {
      
    });
  }
}
