import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../Shared/Tournament.model';
import {ActivatedRoute} from '@angular/router';
import {TournamentService} from '../shared/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  tournament: Tournament;
  constructor(private route: ActivatedRoute,
              private tourService: TournamentService,
              private location: Location
  ) { }

  ngOnInit() {
  }

  getTour(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(id)
      .subscribe(tournament => this.tournament = tournament);
  }

}
