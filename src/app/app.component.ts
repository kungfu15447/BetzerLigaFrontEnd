import { Component } from '@angular/core';
import {AuthenticationService} from './Shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BetzerLigaFrontEnd';
  constructor(private authService: AuthenticationService) {}

  IsUserLoggedIn(): boolean
  {

    if (this.authService.getUser() === null) {
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    // remove user from local storage to log user out
    this.authService.logout();
    window.location.reload();
  }
}
