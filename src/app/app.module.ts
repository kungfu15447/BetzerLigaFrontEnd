import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RoundsListComponent } from './rounds/rounds-list/rounds-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './Shared/user.service';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatFormFieldModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { TournamentLeaderboardComponent } from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './authGuard/auth.guard';
import {AuthenticationService} from './Shared/services/authentication.service';
import { RoundsDetailsComponent } from './rounds/rounds-details/rounds-details.component';
import { RoundAddComponent } from './rounds/round-add/round-add.component';
import { RoundUpdateComponent } from './rounds/round-update/round-update.component';
import { UserRoundsListComponent } from './rounds/user-rounds-list/user-rounds-list.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    NavbarComponent,
    RoundsListComponent,
    TournamentComponent,
    TournamentLeaderboardComponent,
    LoginComponent,
    NavbarComponent,
    RoundsDetailsComponent,
    RoundAddComponent,
    RoundUpdateComponent,
    UserRoundsListComponent,
    HomeComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    MatCardModule,
    UserService,
    TournamentComponent,
    TournamentLeaderboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
