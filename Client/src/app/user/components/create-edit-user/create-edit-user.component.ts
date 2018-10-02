import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { IUser } from '../../../models/User';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.css']
})
export class CreateEditUserComponent implements OnInit {

  id: number;
  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser(this.id)
      .subscribe((users: IUser) => { this.user = this.user; });
  }

}
