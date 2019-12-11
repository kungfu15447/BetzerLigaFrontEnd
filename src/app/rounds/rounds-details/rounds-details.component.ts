import { Component, OnInit } from '@angular/core';
import {RoundService} from '../shared/round.service';
import {ActivatedRoute} from '@angular/router';
import {Round} from '../../Shared/Round.model';

@Component({
  selector: 'app-rounds-details',
  templateUrl: './rounds-details.component.html',
  styleUrls: ['./rounds-details.component.scss']
})
export class RoundsDetailsComponent implements OnInit {

  round: Round;
  constructor(private roundService: RoundService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roundService.getOneRound(id)
      .subscribe(roundFromRest => {
        this.round = roundFromRest;
      });
  }
}
