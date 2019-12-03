import { Component, OnInit } from '@angular/core';
import {RoundService} from '../shared/round.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Round} from '../../Shared/Round.model';

@Component({
  selector: 'app-round-add',
  templateUrl: './round-add.component.html',
  styleUrls: ['./round-add.component.scss']
})
export class RoundAddComponent implements OnInit {

  roundForm = new FormGroup({
    roundNumber: new FormControl(''),
    totalGoals: new FormControl('')
  });
  constructor(private roundService: RoundService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    const roundFromFields = this.roundForm.value;
    const round = {
      roundNumber: roundFromFields.roundNumber,
      totalGoals: roundFromFields.totalGoals,
    };
    this.roundService.addRound(round as Round)
      .subscribe(() => {
       this.router.navigateByUrl('/rounds');
      });
  }
}
