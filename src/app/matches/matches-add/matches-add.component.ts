import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchService} from '../shared/matchService';
import {Router} from '@angular/router';
import {RoundService} from '../../rounds/shared/round.service';
import {Match} from '../../Shared/Match.model';
import {Round} from "../../Shared/Round.model";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-matches-add',
  templateUrl: './matches-add.component.html',
  styleUrls: ['./matches-add.component.scss']
})
export class MatchesAddComponent implements OnInit {
  lookupForm = new FormGroup({
  HomeTeam: new FormControl(''),
  GuestTeam: new FormControl(''),
  StartDate: new FormControl(''),
  HomeScore: new FormControl(''),
  GuestScore: new FormControl(''),
  RoundId: new FormControl(''),
});

  round: Round;
  matchValues = ['HomeTeam', 'GuestTeam', 'StartDate'];
  listOfMatches: Match[] = [];
  constructor(private matchService: MatchService, private roundService: RoundService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roundService.getOneRound(id).subscribe(roundFromRest => this.round = roundFromRest);
  }
    addToList() {
      const m  = this.lookupForm.value;
      m.RoundId = +this.route.snapshot.paramMap.get('id');
      m.HomeScore = 0;
      m.GuestScore = 0;
      this.listOfMatches.push(m);
      this.lookupForm.reset();

    }
    addToRound() {
    this.matchService.addMatch(this.listOfMatches)
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
}
