import { Component, OnInit } from '@angular/core';
import {Round} from '../../Shared/Round.model';
import {UserRound} from '../../Shared/UserRound.model';
import {RoundService} from '../shared/round.service';
import {Observable} from 'rxjs';
import {User} from '../../Shared/User.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-rounds-list',
  templateUrl: './user-rounds-list.component.html',
  styleUrls: ['./user-rounds-list.component.scss']
})
export class UserRoundsListComponent implements OnInit {

  round: Round;

  constructor(private roundService: RoundService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.roundService.getCurrentRound()
      .subscribe(roundFromRest => {
        this.round =  roundFromRest.length > 0 ? roundFromRest[0] : undefined;
      });

  }
}
