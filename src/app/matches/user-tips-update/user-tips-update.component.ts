import {Component, OnInit} from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {UserMatchService} from '../shared/user-match.service';
import {UserService} from '../../users/shared/user.service';
import {UserMatch} from '../../Shared/UserMatch.model';
import {User} from '../../Shared/User.model';

@Component({
  selector: 'app-user-tips-update',
  templateUrl: './user-tips-update.component.html',
  styleUrls: ['./user-tips-update.component.scss']
})
export class UserTipsUpdateComponent implements OnInit {
  matchForm: FormGroup;

  constructor(private roundService: RoundService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private umService: UserMatchService,
              private route: ActivatedRoute) {
    this.matchForm = this.formBuilder.group({
      credentials: new FormArray([])
    });
  }

  tipsFromUser: UserMatch[];
  currentUser: User;

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.getTips();
  }

  get f() {
    return this.matchForm.controls;
  }

  get t() {
    return this.f.credentials as FormArray;
  }

  getTips() {
    const roundId = +this.route.snapshot.paramMap.get('id');
    this.umService.getUserMatches(this.currentUser.id, roundId)
      .subscribe(tipsFromRest => {
        this.tipsFromUser = tipsFromRest;
        this.createFormGroups();
      });
  }

  createFormGroups() {
    for (const tip of this.tipsFromUser) {
      this.t.push(this.formBuilder.group({
        id: [tip.id],
        homeTip: [tip.homeTip],
        guestTip: [tip.guestTip],
        rating: [tip.rating],
        userId: [tip.userId],
        matchId: [tip.matchId],
      }));
    }
  }

  save() {
    const updatedListToSend = this.t.value;
    this.umService.updateUserMatches(updatedListToSend).subscribe(() => {
      this.router.navigateByUrl('/user-tips-list/' + this.route.snapshot.paramMap.get('id'));
    });
  }
}
