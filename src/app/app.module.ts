import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import {HttpClientModule} from '@angular/common/http';
import { TournamentLeaderboardComponent } from './tournaments/tournament-leaderboard/tournament-leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    TournamentLeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
