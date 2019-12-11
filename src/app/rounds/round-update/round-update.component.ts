import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RoundService} from '../shared/round.service';

@Component({
  selector: 'app-round-update',
  templateUrl: './round-update.component.html',
  styleUrls: ['./round-update.component.scss']
})
export class RoundUpdateComponent implements OnInit {

  id: number;
  roundForm = new FormGroup({
    roundNumber: new FormControl(''),
    totalGoals: new FormControl(''),
    tournamentId: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private roundService: RoundService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.roundService.getOneRound(this.id)
      .subscribe(roundFromRest => {
        this.roundForm.patchValue({
          roundNumber: roundFromRest.roundNumber,
          totalGoals: roundFromRest.totalGoals,
          tournamenId: roundFromRest.tournamentId
        });
      });
  }

  save() {
    const round = this.roundForm.value;
    round.id = this.id;
    this.roundService.updateRound(round)
      .subscribe(() => {
        this.router.navigateByUrl('/rounds');
      });
  }

}
