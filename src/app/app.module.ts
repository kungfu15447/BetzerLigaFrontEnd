import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './Shared/user.service';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { TournamentLeaderboardComponent } from './tournaments/tournament-leaderboard/tournament-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    NavbarComponent,
    TournamentComponent,
    TournamentLeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [
    UserService,
    TournamentComponent,
    TournamentLeaderboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
