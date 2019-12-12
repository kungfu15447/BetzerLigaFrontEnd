import {Component, OnInit} from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {UserService} from '../../Shared/user.service';
import {Match} from '../../Shared/Match.model';
import {Round} from '../../Shared/Round.model';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';
import {UserMatch} from '../../Shared/UserMatch.model';
import {ActivatedRoute, Router} from '@angular/router';
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
              private umService: UserMatchService,
              private route: ActivatedRoute,
              private matchService: MatchService) {
    this.matchForm = this.formBuilder.group({
      credentials: new FormArray([])
    });
  }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches()
      .subscribe(matchesFromRest => {
        this.matches = matchesFromRest;
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
    for (const match of this.matches) {
      this.t.push(this.formBuilder.group({
        homeTip: [''],
        guestTip: [''],
        rating: [''],
        userId: [this.currentUser.id],
        matchId: [match.id],
      }));
    }
    }

  save() {
    const listToSend = this.matchForm.controls.credentials.value;
    this.umService.addUserMatch(listToSend);
  }
}
