import { Component, OnInit } from '@angular/core';
import {Round} from '../../Shared/Round.model';
import {Observable} from 'rxjs';
import {RoundService} from '../../Shared/round.service';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.scss']
})
export class RoundsListComponent implements OnInit {

  constructor(private roundService: RoundService) { }
  rounds: Round[];
  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.roundService.getRounds().subscribe(listOfRounds => {
      this.rounds = listOfRounds;
    });
  }
}
