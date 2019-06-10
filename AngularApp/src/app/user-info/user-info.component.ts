import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;

  constructor(public service: UserService) { }

  ngOnInit() {
    this.service.user$.subscribe(usr => this.user = usr);
  }

}
