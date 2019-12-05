import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../shared/tournament.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../Shared/Tournament.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-tournament-leaderboard',
  templateUrl: './tournament-leaderboard.component.html',
  styleUrls: ['./tournament-leaderboard.component.scss']
})
export class TournamentLeaderboardComponent implements OnInit {
  tournaments: Tournament[] ;
  tournament: Tournament;
  loading: boolean;

  constructor(private tourService: TournamentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOnGoingTour();
  }

  getOnGoingTour(): void {
    this.loading = true;
    this.tourService.getAllTour('currentTournament')
      .pipe(
        take(1)
      )
      .subscribe(tournaments => {
        this.tournament = tournaments.length > 0 ? tournaments[0] : undefined;
        console.log(this.tournament.name);

        this.logTournement();
        this.loading = false;
      });
    console.log(this.tournament.name);
  }
  logTournement() {
    console.log(this.tournament.name);
  }

  clickedTheButton() {
    if (this.tournament) {
      console.log(this.tournament.name);
    }
  }
}
