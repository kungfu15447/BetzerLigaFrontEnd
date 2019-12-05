import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchService} from '../shared/matchService';
import {Router} from '@angular/router';
import {Match} from '../../Shared/Match.model';

@Component({
  selector: 'app-matches-add',
  templateUrl: './matches-add.component.html',
  styleUrls: ['./matches-add.component.scss']
})
export class MatchesAddComponent implements OnInit {
  matchForm = new FormGroup({
  HomeTeam: new FormControl(''),
  GuestTeam: new FormControl(''),
  StartDate: new FormControl(''),
  Round: new FormControl(''),
});

  constructor(private matchService: MatchService, private router: Router, match: Match) {
  }

  match = this.matchService.getMatches();
  ngOnInit() {}

    add() {
    const match = this.matchForm.value;
    this.matchService.addMatch(match)
      .subscribe(() => {
        this.router.navigateByUrl('/matches');
      });
}}
