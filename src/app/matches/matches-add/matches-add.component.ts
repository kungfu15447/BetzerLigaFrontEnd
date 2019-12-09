import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchService} from '../shared/matchService';
import {Router} from '@angular/router';
import {RoundService} from '../../rounds/shared/round.service';
import {Match} from '../../Shared/Match.model';

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

});
  matchValues = ['HomeTeam', 'GuestTeam', 'StartDate'];
  listOfMatches: Match[] = [];
  amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private matchService: MatchService, private router: Router, private roundService: RoundService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }
    addToList() {
      const m  = this.lookupForm.value;
      m.HomeScore = 0;
      m.GuestScore = 0;
      this.listOfMatches.push(m);

    }
    addToRound() {

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
