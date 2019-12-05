import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../shared/tournament.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.scss']
})
export class TournamentAddComponent implements OnInit {


  tournamentForm = this.fb.group({
    name: [''],
    numberOfRounds: [''],
    isDone: [''],
    startDate: [''],
    endDate: [''],
  });
  constructor(private tourService: TournamentService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  addTournament(): void {
    const tournament = this.tournamentForm.value;
    tournament.isDone = false;
    debugger;
    this.tourService.addTour(tournament)
      .subscribe();
  }

}
