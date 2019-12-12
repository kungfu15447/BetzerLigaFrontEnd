import { Component, OnInit } from '@angular/core';
import {TournamentService} from '../shared/tournament.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tournament-update',
  templateUrl: './tournament-update.component.html',
  styleUrls: ['./tournament-update.component.scss']
})
export class TournamentUpdateComponent implements OnInit {

  id: number;
  tournamentForm = this.fb.group({
    name: [''],
    numberOfRounds: [''],
    isDone: [''],
    startDate: [''],
    endDate: [''],
  });
  constructor(private tourService: TournamentService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.tourService.getTour(this.id)
      .subscribe( tour => {
        this.tournamentForm.patchValue({
          name: tour.name,
          numberOfRounds: tour.numberOfRounds,
          isDone: tour.isDone,
          startDate: new Date(tour.startDate).toISOString().slice(0, 10),
          endDate: new Date(tour.endDate).toISOString().slice(0, 10)
        });
      });

  }

  updateTournament(): void {
    const tournament = this.tournamentForm.value;
    tournament.id = this.id;
    this.tourService.updateTour(tournament)
      .subscribe( () => {
        this.router.navigateByUrl('/tournamentList');
      });
  }
}
