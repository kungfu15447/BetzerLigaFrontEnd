import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
  HomeScore: new FormControl(''),
  GuestTeam: new FormControl(''),
  GuestScore: new FormControl(''),
  StartDate: new FormControl(''),
  Round: new FormControl('')
});

  constructor(private matchService: MatchService, private router: Router, private roundService: RoundService) { }

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
  count(): number {
    let i = 0;
    for (const item of this.rounds)
    {
      i++;
    }
    return i;
  }
}
