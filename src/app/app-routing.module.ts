import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
