import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchService} from '../shared/matchService';
import {Router} from '@angular/router';
import {Round} from '../../Shared/Round.model';
import {RoundService} from '../../rounds/shared/round.service';

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

});

  constructor(private matchService: MatchService, private router: Router, private roundService: RoundService) { }

  amount = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11 , 12];

  ngOnInit() {

  }


    add() {
    const match = this.matchForm.value;
    this.matchService.addMatch(match)
      .subscribe(() => {
        this.router.navigateByUrl('/matches');
      });
}
}
