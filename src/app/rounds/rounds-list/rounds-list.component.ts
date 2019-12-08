import { Component, OnInit } from '@angular/core';
import {Round} from '../../Shared/Round.model';
import {Observable} from 'rxjs';
import {RoundService} from '../shared/round.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.scss']
})
export class RoundsListComponent implements OnInit {

  rounds: Round[];

  constructor(private roundService: RoundService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.roundService.getRounds()
      .subscribe(listOfRounds => this.rounds = listOfRounds);
  }

  deleteRound(id: number) {
    this.roundService.deleteRound(id)
      .subscribe(message => {
        console.log('Deleted user, got message: ' + message);
        this.refresh();
      });
  }

}
