import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import {HttpClientModule} from '@angular/common/http';
import { TournamentLeaderboardComponent } from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './Shared/services/authentication.service';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    TournamentComponent,
    TournamentLeaderboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
