import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import {RoundsListComponent} from './rounds/rounds-list/rounds-list.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./authGuard/auth.guard";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent, canActivate: [AuthGuard]},
  {path: 'leaderboard', component: TournamentLeaderboardComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'rounds', component: RoundsListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
