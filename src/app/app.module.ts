import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './Shared/user.service';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
