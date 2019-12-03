import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Shared/user.service';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {User} from '../../Shared/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  loggedInUser: User;
  users: any = [];
  constructor(private userService: UserService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.loggedInUser = this.authServ.getUser();
    this.getUsers();
  }
  getUsers(): void {
  this.userService.getUsers()
    .subscribe(users => {this.users = users;
  });
}

}
