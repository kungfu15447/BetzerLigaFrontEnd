import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import {LoginComponent} from './login/login.component';
import {RoundsListComponent} from './rounds/rounds-list/rounds-list.component';
import {AuthGuard} from './authGuard/auth.guard';
import {RoundsDetailsComponent} from './rounds/rounds-details/rounds-details.component';
import {RoundAddComponent} from './rounds/round-add/round-add.component';
import {RoundUpdateComponent} from './rounds/round-update/round-update.component';
import {HomeComponent} from './home/home.component';
import {RulesComponent} from './rules/rules.component';
import {UserTipsComponent} from './matches/user-tips/user-tips.component';
import {UserRoundsListComponent} from './rounds/user-rounds-list/user-rounds-list.component';
import {MatchesAddComponent} from './matches/matches-add/matches-add.component';
import {TournamentAddComponent} from './tournaments/tournament-add/tournament-add.component';
import {TournamentListComponent} from './tournaments/tournament-list/tournament-list.component';
import {RoundMatchComponent} from './round-match/round-match.component';
import {UserTipsListComponent} from './matches/user-tips-list/user-tips-list.component';
import {UserTipsUpdateComponent} from './matches/user-tips-update/user-tips-update.component';
import {TournamentUpdateComponent} from './tournaments/tournament-update/tournament-update.component';



const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent, canActivate: [AuthGuard]},
  {path: 'leaderboard', component: TournamentLeaderboardComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'rounds', component: RoundsListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'rounds', component: RoundsListComponent, canActivate: [AuthGuard]},
  {path: 'rounds/:id', component: RoundsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'round-add', component: RoundAddComponent, canActivate: [AuthGuard]},
  {path: 'round-update/:id', component: RoundUpdateComponent, canActivate: [AuthGuard]},
  {path: 'user-rounds-list', component: UserRoundsListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'user-tips-list/:id', component: UserTipsListComponent},
  {path: 'user-tips/:id', component: UserTipsComponent},
  {path: 'user-tips-update/:id', component: UserTipsUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rules', component: RulesComponent, canActivate: [AuthGuard]},
  {path: 'add-MatchRound/:id', component: MatchesAddComponent, canActivate: [AuthGuard]},
  {path: 'addTournament', component: TournamentAddComponent, canActivate: [AuthGuard]},
  {path: 'tournamentList', component: TournamentListComponent, canActivate: [AuthGuard]},
  {path: 'RoundMatch/:id', component: RoundMatchComponent, canActivate: [AuthGuard]},
  {path: 'tournament-update/:id', component: TournamentUpdateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
