import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../User.model';
import {RoundService} from '../../rounds/shared/round.service';
import {Round} from '../Round.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private roundService: RoundService) {}
  round: Round;
  currentUser;
  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.roundService.getCurrentRoundSearchedMatches(this.currentUser.id).subscribe(roundFromRest => {
      this.round = roundFromRest.length > 0 ? roundFromRest[0] : undefined;
      });
  }

  logout(): void {
    // remove user from local storage to log user out
    this.authService.logout();
  }
  getUser(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.user;
  }

}
