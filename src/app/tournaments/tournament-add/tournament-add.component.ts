import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../shared/tournament.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

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
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  addTournament(): void {
    const tournament = this.tournamentForm.value;
    tournament.isDone = false;
    this.tourService.addTour(tournament)
      .subscribe(() => this.router.navigateByUrl('/tournamentList'));
  }

}
