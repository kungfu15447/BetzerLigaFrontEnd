import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {TournamentComponent} from './tournaments/tournament/tournament.component';
import {TournamentLeaderboardComponent} from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import {RoundsListComponent} from './rounds/rounds-list/rounds-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './authGuard/auth.guard';
import {RoundsDetailsComponent} from './rounds/rounds-details/rounds-details.component';
import {RoundAddComponent} from './rounds/round-add/round-add.component';
import {RoundUpdateComponent} from './rounds/round-update/round-update.component';
import {UserRoundsListComponent} from './rounds/user-rounds-list/user-rounds-list.component';
import {HomeComponent} from './home/home.component';
import {RulesComponent} from './rules/rules.component';
import {UserTipsComponent} from './matches/user-tips/user-tips.component';



const routes: Routes = [
  {path: 'tournament/:id', component: TournamentComponent, canActivate: [AuthGuard]},
  {path: 'leaderboard', component: TournamentLeaderboardComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'rounds', component: RoundsListComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'rounds', component: RoundsListComponent},
  {path: 'rounds/:id', component: RoundsDetailsComponent},
  {path: 'round-add', component: RoundAddComponent},
  {path: 'round-update/:id', component: RoundUpdateComponent},
  {path: 'user-rounds-list', component: UserRoundsListComponent},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'user-tips', component: UserTipsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rules', component: RulesComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
