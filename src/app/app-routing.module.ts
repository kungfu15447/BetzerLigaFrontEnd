import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';


const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent},
  {path: 'leaderboard', component: TournamentLeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
