import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../shared/tournament.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../Shared/Tournament.model';
import {take} from 'rxjs/operators';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {UserTour} from '../../Shared/UserTour.model';
import {User} from '../../Shared/User.model';

@Component({
  selector: 'app-tournament-leaderboard',
  templateUrl: './tournament-leaderboard.component.html',
  styleUrls: ['./tournament-leaderboard.component.scss']
})
export class TournamentLeaderboardComponent implements OnInit {
  tournaments: Tournament[] ;
  tournament: Tournament;
  favTournaments: UserTour[] = [];
  showFavorites: boolean;
  user: User;
  loading: boolean;

  constructor(private tourService: TournamentService,
              private route: ActivatedRoute,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.showFavorites = false;
    this.user = this.authService.getUser();
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
        this.showOnlyFavorites();
      });
  }
  showOnlyFavorites(): void {
    const user = this.user;
    this.tournament.participants.forEach(participant => {
      user.following.forEach( follower => {
        if (follower.followId === participant.userId) {
          this.favTournaments.push(participant);
        }
      });
    });
  }

  changeShowFavorites(): void {
    if (!this.showFavorites) {
      this.showFavorites = true;
    } else {
      this.showFavorites = false;
      console.log(this.tournament.name);
      this.logTournement();
      this.loading = false;
      console.log(this.tournament.name);
    }
  }
    logTournement()
    {
      console.log(this.tournament.name);
    }

    clickedTheButton() {
      if (this.tournament) {
        console.log(this.tournament.name);
      }
    }
}
