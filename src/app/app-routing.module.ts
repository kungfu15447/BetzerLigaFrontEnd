import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import {RoundsListComponent} from './rounds/rounds-list/rounds-list.component';


const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent},
  {path: 'leaderboard', component: TournamentLeaderboardComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'rounds', component: RoundsListComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
