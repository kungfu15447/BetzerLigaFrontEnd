import { Component, OnInit } from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {UserService} from '../../Shared/user.service';
import {Match} from '../../Shared/Match.model';
import {Round} from '../../Shared/Round.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';
import {UserMatch} from '../../Shared/UserMatch.model';
import {variable} from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-tips',
  templateUrl: './user-tips.component.html',
  styleUrls: ['./user-tips.component.scss']
})
export class UserTipsComponent implements OnInit {

  matchForm = new FormGroup({
    homeTip: new FormControl(''),
    guestTip: new FormControl(''),
    rating: new FormControl('')
  });
  round: Round;
  currentUser: User;
  tipsForUser: UserMatch[];
  constructor(private roundService: RoundService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getRound();
    this.currentUser = this.authService.getUser();
  }

  getRound() {
    this.roundService.getCurrentRound()
      .subscribe(roundsFromRest => {
          this.round = roundsFromRest.length > 0 ? roundsFromRest[0] : undefined;
          this.checkUserForRound();
      });

  }
  checkUserForRound() {
    /*for (const match of this.round.matches) {
      for (const tips of match.tips) {
        if (tips.userId === this.currentUser.id) {
          this.tipsForuser = match.tips;
          this.matchForm.patchValue({
            homeTip: tips.homeTip,
            guestTip: tips.guestTip,
            rating: tips.rating
          });
        }
      }
    }*/
    this.round.matches.forEach(function(match) {
      match.tips.forEach(function(tips) {
        if (tips.userId ===  this.currentUser.id) {
          this.tipsForUser = tips;
        }
      });
    });
  }

  save() {
    this.tipsForUser = this.matchForm.value;
    this.currentUser.tips = this.tipsForUser;
    const userToUpdate = this.currentUser;
    this.userService.updateUser(userToUpdate)
      .subscribe(() => {
        this.router.navigateByUrl('/rounds');
      });
  }
}
