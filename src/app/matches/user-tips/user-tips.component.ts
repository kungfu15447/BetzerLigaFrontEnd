import {Component, OnInit} from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {UserService} from '../../Shared/user.service';
import {Match} from '../../Shared/Match.model';
import {Round} from '../../Shared/Round.model';
import {Form, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';
import {UserMatch} from '../../Shared/UserMatch.model';
import {variable} from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';
import {MatchService} from '../shared/match.service';
import {templateVisitAll} from "@angular/compiler";

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
              private matchService: MatchService,
              private formBuilder: FormBuilder) {
    this.matchForm = this.formBuilder.group({
      credentials: this.formBuilder.array([])
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
          for (const tips of match.tips) {
            console.log(tips);
            this.tipsForUser.push(tips);
          }
        }
        this.createFormGroups();
      });
  }

  createFormGroups(): FormArray {
    const creds = this.matchForm.controls.credentials as FormArray;
    for (let i = 0; i < this.tipsForUser.length; i++) {
      console.log(i);
      creds.push(this.formBuilder.group({
        homeTip: [''],
        guestTip: [''],
        rating: [''],
        userId: [''],
        matchId: [''],
      }));
    }
    return creds;
  }

  save() {
    this.tipsForUser = this.matchForm.value;
    this.tipsForUser = this.currentUser.tips = [];
    const userToUpdate = this.currentUser;
    this.userService.updateUser(userToUpdate)
      .subscribe(() => {
        this.router.navigateByUrl('/rounds');
      });
  }
}
