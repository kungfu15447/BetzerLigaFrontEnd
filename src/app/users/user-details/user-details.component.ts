import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../Shared/user.service';
import {User} from '../../Shared/User.model';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {Following} from '../../Shared/Following.model';
import {forEachComment} from 'tslint';

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

  id: number;
  @Input() user: User;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const id = this.id;
    this.userService.getUserById(id)
      .subscribe(restUser => {
        this.user = restUser;
      });
  }

  addFavorite() {
    const user = this.authServ.getUser();
    for (const userFollowed of user.following) {
      if (userFollowed.followId !== this.id) {
        const follower: Following = {
          authorizedUserId: user.id,
          authorizedUser: null,
          followId: this.id,
          follow: null
        };
        user.following.push(follower);
        debugger;
        this.userService.updateUser(user)
          .subscribe(() => {
            this.router.navigateByUrl('/users');
          });
      }
    }
  }

  SafetyCheck(fn: any) {
    try {
      return fn();
    } catch (e) {
      return undefined;
    }
  }
}
