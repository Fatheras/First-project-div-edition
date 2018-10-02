import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import {IUser} from '../../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: IUser[]) => { this.users = users; });
  }

}