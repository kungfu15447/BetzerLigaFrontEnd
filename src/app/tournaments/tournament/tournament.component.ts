import {Component, OnInit} from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentService} from '../shared/tournament.service';
import {Round} from '../../Shared/Round.model';
import {RoundService} from '../../rounds/shared/round.service';
import {totalmem} from 'os';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament: Tournament;
  loading: boolean;
  submitted = false;
  round: any = {};
  roundForm = new FormGroup({
    roundNumber: new FormControl(''),
    totalGoals: new FormControl(''),
    tournamentId: new FormControl(''),
    tournament: new FormControl(''),
    tippingDeadLine: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private tourService: TournamentService,
              private roundService: RoundService,
              private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.getTour();
  }

  get tippingDeadline() {
    return this.roundForm.get('tippingDeadLine');
  }

  getTour(): void {
    this.loading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
      .subscribe(tournament => this.tournament = tournament);
    this.loading = false;
  }

  /*addRound(): void {
    this.submitted = true;
    const currentTournament = this.tournament;
    const roundFromFields = this.roundForm.value;
    roundFromFields.totalGoals = 0;
    roundFromFields.tournamentId = currentTournament.id;
    roundFromFields.roundNumber = (currentTournament.rounds.length + 1);
    if (currentTournament.rounds.length < currentTournament.numberOfRounds || roundFromFields.roundNumber !== 0) {
      this.roundService.addRound(roundFromFields).subscribe(
        roundo => currentTournament.rounds.push(roundo)
      );
    } else {
    }
  }*/

}
