import { Component, OnInit } from '@angular/core';
import {RoundService} from '../../rounds/shared/round.service';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {UserMatchService} from '../shared/user-match.service';
import {UserService} from '../../users/shared/user.service';

@Component({
  selector: 'app-user-tips-update',
  templateUrl: './user-tips-update.component.html',
  styleUrls: ['./user-tips-update.component.scss']
})
export class UserTipsUpdateComponent implements OnInit {

  constructor(private roundService: RoundService,
              private authService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private umService: UserMatchService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
