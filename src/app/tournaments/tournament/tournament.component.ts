import {Component, OnInit} from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentService} from '../shared/tournament.service';
import {Round} from '../../Shared/Round.model';
import {RoundService} from '../../rounds/shared/round.service';
import {totalmem} from 'os';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {partition} from 'rxjs/operators';
import {User} from '../../Shared/User.model';
import {UserTour} from '../../Shared/UserTour.model';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  loggedInUser: User;
  tournament: Tournament;
  loading: boolean;
  submitted = false;
  round: any = {};

  constructor(private route: ActivatedRoute,
              private tourService: TournamentService,
              private roundService: RoundService,
              private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loggedInUser = this.authService.getUser();
    this.getTour();
  }

  getTour(): void {
    this.loading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
      .subscribe(tournament => {
        this.tournament = tournament;
        this.getActiveRound();
        this.tourService.updateTour(this.tournament);
        this.roundService.updateRound(this.round);
        this.loading = false;
      });

  }

  isInTournament(): boolean {
    let isIn = false;
    this.tournament.participants.forEach( (participant) => {
      if (participant.userId === this.loggedInUser.id) {
        isIn = true;
      }
    });
    return isIn;
  }

  participate(): void {
    const participant: UserTour = {
      userId: this.loggedInUser.id,
      user: this.loggedInUser,
      tournamentId: this.tournament.id,
      tournament: null,
      totalUserPoints: 0
    };
    this.tournament.participants.push(participant);
    this.tourService.updateTour(this.tournament).subscribe();
  }

  removeFromParticipants(): void {
    this.tournament.participants = this.tournament.participants
      .filter(p => p.userId !== this.loggedInUser.id);
    this.tourService.updateTour(this.tournament)
      .subscribe();
  }

  isTournamentStarted(): boolean {
    const currentDateTime = new Date().valueOf();
    const startDateTime = new Date(this.tournament.startDate).valueOf();
    if (startDateTime > currentDateTime) {
      return false;
    } else {
      return true;
    }
  }

  getActiveRound(): void {
    this.tournament.rounds.forEach( (round) => {
      if (this.round === undefined) {
        this.round = round;
      } else if (this.round.roundNumber < round.roundNumber) {
        const tippingDeadlineTime = new Date(round.tippingDeadLine).valueOf();
        const currentDateTime = new Date().valueOf();
        if (tippingDeadlineTime < currentDateTime) {
          this.round = round;
        }
      }
    });
  }
}
