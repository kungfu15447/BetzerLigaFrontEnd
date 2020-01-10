import {Component, OnInit} from '@angular/core';
import {Round} from '../Shared/Round.model';
import {MatchService} from '../matches/shared/matchService';
import {RoundService} from '../rounds/shared/round.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Match} from '../Shared/Match.model';

@Component({
  selector: 'app-round-match',
  templateUrl: './round-match.component.html',
  styleUrls: ['./round-match.component.scss']
})
export class RoundMatchComponent implements OnInit {
  round: Round;
  loading: boolean;
  edit: boolean;
  id: number;
  today: Date;

  matchForm = new FormGroup({
    homeTeam: new FormControl(''),
    guestTeam: new FormControl(''),
    startDate: new FormControl(''),
    homeScore: new FormControl(''),
    guestScore: new FormControl(''),
    roundId: new FormControl(''),
  });

  constructor(private roundService: RoundService,
              private matchService: MatchService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.today = new Date();
    const id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.roundService.getOneRound(id)
      .subscribe(value => {
        this.round = value;
        this.round.matches.forEach((match) => {
          this.matchForm.patchValue({
            homeTeam: match.homeTeam,
            guestTeam: match.guestTeam,
            startDate: match.startDate,
            homeScore: match.homeScore,
            guestScore: match.guestScore,
            roundId: match.roundId
          });
        });
        this.loading = false;
      });
  }

  refresh() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.roundService.getOneRound(id)
      .subscribe(value => {
        this.round = value;
        this.loading = false;
      });
  }

  delete(id: number) {
    this.matchService.delete(id)
      .subscribe(message => {
        console.log('Deleted match, got message: ' + message);
        this.refresh();
      });
  }
  save(): void {
  }
}
