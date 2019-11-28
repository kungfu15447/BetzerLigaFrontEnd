import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoundsListComponent} from './rounds/rounds-list/rounds-list.component';


const routes: Routes = [
  {path: 'rounds', component: RoundsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
