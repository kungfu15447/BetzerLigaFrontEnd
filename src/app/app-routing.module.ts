import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';

import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./authGuard/auth.guard";


const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent},
  {path: 'leaderboard', component: TournamentLeaderboardComponent},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
