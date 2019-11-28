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
  tournaments: Tournament[];

  constructor(private tourService: TournamentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.tourService.getAllTour()
      .pipe(
        take(1)
      )
      .subscribe(tournaments => this.tournaments = tournaments);
  }
}
