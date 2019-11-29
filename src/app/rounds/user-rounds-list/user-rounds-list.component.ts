import { Component, OnInit } from '@angular/core';
import {Round} from '../../Shared/Round.model';
import {UserRound} from '../../Shared/UserRound.model';

@Component({
  selector: 'app-user-rounds-list',
  templateUrl: './user-rounds-list.component.html',
  styleUrls: ['./user-rounds-list.component.scss']
})
export class UserRoundsListComponent implements OnInit {

  round: Round;

  constructor() { }

  ngOnInit() {
  }

}
