import { Component, OnInit } from '@angular/core';
import {RoundService} from '../shared/round.service';

@Component({
  selector: 'app-round-add',
  templateUrl: './round-add.component.html',
  styleUrls: ['./round-add.component.scss']
})
export class RoundAddComponent implements OnInit {

  constructor(private roundService: RoundService,
              private router: Router) { }

  ngOnInit() {
  }

}
