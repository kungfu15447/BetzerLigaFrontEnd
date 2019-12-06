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

  amount = [1, 1, 1, 1, 1, 1, 1, 1, 1 , 1 , 1 , 1];
  rounds: Round[];
  ngOnInit() {
    this.roundService.getRounds().subscribe(value => this.rounds = value);
  }


    add() {
    const match = this.matchForm.value;
    this.matchService.addMatch(match)
      .subscribe(() => {
        this.router.navigateByUrl('/matches');
      });
}
}
