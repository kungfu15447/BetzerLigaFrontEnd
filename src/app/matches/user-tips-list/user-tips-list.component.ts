import {Component, OnInit} from '@angular/core';
import {UserMatchService} from '../shared/user-match.service';
import {User} from '../../Shared/User.model';
import {RoundService} from '../../rounds/shared/round.service';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {UserMatch} from '../../Shared/UserMatch.model';
import {UserService} from '../../users/shared/user.service';
import {Match} from "../../Shared/Match.model";
import {MatchService} from "../shared/matchService";

@Component({
  selector: 'app-user-tips-list',
  templateUrl: './user-tips-list.component.html',
  styleUrls: ['./user-tips-list.component.scss']
})
export class UserTipsListComponent implements OnInit {
  private tipsForUser: UserMatch[];
  roundId: number;
  constructor(private roundService: RoundService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private umService: UserMatchService,
              private route: ActivatedRoute) {
  }

  currentUser: User;

  ngOnInit() {
    this.roundId = +this.route.snapshot.paramMap.get('id');
    this.currentUser = this.authService.getUser();
    this.getUserMatches();
  }

  private getUserMatches() {
    this.umService.getUserMatches(this.currentUser.id, this.roundId)
      .subscribe(userMatchesFromRest => {
        this.tipsForUser = userMatchesFromRest;
      });
  }
}
