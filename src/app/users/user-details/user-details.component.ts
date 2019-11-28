import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../Shared/user.service';
import {User} from '../../Shared/User.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  @Input() user: User;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id)
      .subscribe(restUser => {
        this.user = restUser;
      });
  }

}
