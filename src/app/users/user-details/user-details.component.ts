import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../Shared/user.service';
import {User} from '../../Shared/User.model';
import {AuthenticationService} from '../../Shared/services/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private authServ: AuthenticationService) {
  }

  @Input() user: User;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(restUser => {
        this.user = restUser;
      });
  }

  addFavorite() {
    const user = this.authServ.getUser();
    this.authServ.getUser();
    this.authServ.getUser().following.push(this.user);
    this.userService.updateUser(user)
      .subscribe(() => {
        this.router.navigateByUrl('/users');
      });
  }
}
