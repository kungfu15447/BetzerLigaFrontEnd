import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchService} from '../shared/matchService';
import {ActivatedRoute, Router} from '@angular/router';
import {RoundService} from '../../rounds/shared/round.service';
import {Match} from '../../Shared/Match.model';
import {Tournament} from '../../Shared/Tournament.model';
import {TournamentService} from '../../tournaments/shared/tournament.service';
import {Round} from '../../Shared/Round.model';

@Component({
  selector: 'app-matches-add',
  templateUrl: './matches-add.component.html',
  styleUrls: ['./matches-add.component.scss']
})
export class MatchesAddComponent implements OnInit {
  tournament: Tournament;
  loading: boolean;
  submitted = false;
  lookupForm = new FormGroup({
    HomeTeam: new FormControl(''),
    GuestTeam: new FormControl(''),
    StartDate: new FormControl(''),
    HomeScore: new FormControl(''),
    GuestScore: new FormControl(''),
    Round: new FormControl(''),
  });
  roundForm = new FormGroup({
    roundNumber: new FormControl(''),
    totalGoals: new FormControl(''),
    tournamentId: new FormControl(''),
    tournament: new FormControl(''),
    tippingDeadLine: new FormControl('')
  });

  matchValues = ['HomeTeam', 'GuestTeam', 'StartDate'];
  listOfMatches: Match[] = [];

  constructor(private matchService: MatchService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private tourService: TournamentService,
              private roundService: RoundService) {
    this.createForm();
  }

  ngOnInit() {
    this.getTour();
  }

  addToList() {
    const m = this.lookupForm.value;
    m.HomeScore = 0;
    m.GuestScore = 0;
    this.listOfMatches.push(m);
    this.lookupForm.reset();
  }
  removeFromList(m: Match) {
    const indexOfM = this.listOfMatches.indexOf(m);
    this.listOfMatches.splice(indexOfM, 1);
  }

  addMatchToRound(tournament: Tournament, round: Round) {
    for (const match of this.listOfMatches) {
      match.roundId = round.id;
    }
    this.matchService.addMatch(this.listOfMatches)
      .subscribe();
  }

  createForm() {
    this.lookupForm = this.formBuilder.group({
      HomeTeam: '',
      GuestTeam: '',
      StartDate: '',
      HomeScore: '',
      GuestScore: '',
    });
  }

  get tippingDeadline() {
    return this.roundForm.get('tippingDeadLine');
  }

  getTour(): void {
    this.loading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
      .subscribe(tournament => {
        this.tournament = tournament;
        this.loading = false;
      });
  }

  addRound(): void {
    this.submitted = true;
    const currentTournament = this.tournament;
    const roundFromFields = this.roundForm.value;
    roundFromFields.totalGoals = 0;
    roundFromFields.tournamentId = currentTournament.id;
    roundFromFields.roundNumber = (currentTournament.rounds.length + 1);
    debugger;
    if (currentTournament.rounds.length < currentTournament.numberOfRounds || roundFromFields.roundNumber !== 0) {
      this.roundService.addRound(roundFromFields).subscribe(
        roundo => {
          currentTournament.rounds.push(roundo);
          this.addMatchToRound(currentTournament, roundo);
        }
      );

    } else {
    }
  }
}
