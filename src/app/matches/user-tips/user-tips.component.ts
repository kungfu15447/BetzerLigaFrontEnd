import {Component, OnInit} from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {UserService} from '../../Shared/user.service';
import {Match} from '../../Shared/Match.model';
import {Round} from '../../Shared/Round.model';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';
import {UserMatch} from '../../Shared/UserMatch.model';
import {Router} from '@angular/router';
import {templateVisitAll} from '@angular/compiler';
import {UserMatchService} from '../shared/user-match.service';
import {MatchService} from '../shared/matchService';

@Component({
  selector: 'app-user-tips',
  templateUrl: './user-tips.component.html',
  styleUrls: ['./user-tips.component.scss']
})
export class UserTipsComponent implements OnInit {

  matchForm: FormGroup;

  matches: Match[];
  round: Round;
  currentUser: User;
  tipsForUser: UserMatch[] = [];

  constructor(private roundService: RoundService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private umService: UserMatchService) {
    this.matchForm = this.formBuilder.group({
      credentials: new FormArray([])
    });
  }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getRound();
  }

  getRound() {
    this.roundService.getCurrentRoundSearchedMatches(this.currentUser.id)
      .subscribe(roundFromRest => {
        this.round = roundFromRest.length > 0 ? roundFromRest[0] : undefined;
        this.matches = roundFromRest.length > 0 ? roundFromRest[0].matches : undefined;
        for (const match of roundFromRest[0].matches) {
          for (const tips of match.Tips) {
            this.tipsForUser.push(tips);
          }
        }
        this.createFormGroups();
      });
  }

  get f() {
    return this.matchForm.controls;
  }

  get t() {
    return this.f.credentials as FormArray;
  }

  createFormGroups() {
    for (const tip of this.tipsForUser) {
      this.t.push(this.formBuilder.group({
        homeTip: [''],
        guestTip: [''],
        rating: [''],
        userId: [tip.userId],
        matchId: [tip.matchId],
      }));
    }
  }

  save() {
    const listToSend = this.matchForm.controls.credentials.value;
    this.umService.addUserMatch(listToSend);
  }
}
