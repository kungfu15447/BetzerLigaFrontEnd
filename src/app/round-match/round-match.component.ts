import { Component, OnInit } from '@angular/core';
import {Match} from '../Shared/Match.model';
import {Round} from '../Shared/Round.model';
import {MatchService} from '../matches/shared/matchService';
import {RoundService} from '../rounds/shared/round.service';
import {Tournament} from '../Shared/Tournament.model';
import {TournamentComponent} from '../tournaments/tournament/tournament.component';

@Component({
  selector: 'app-round-match',
  templateUrl: './round-match.component.html',
  styleUrls: ['./round-match.component.scss']
})
export class RoundMatchComponent implements OnInit {
  tournament: Tournament;
  currentRound: Round;
  listOfMatches: Match[];


  constructor(private roundService: RoundService,
              private matchService: MatchService,
              private tournamentC: TournamentComponent) { }

  ngOnInit() {
    this.currentRound = this.tournamentC.round;
    this.listOfMatches = this.currentRound.matches;
  }

  removeFromList() {

  }
}
