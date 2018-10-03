import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { IUser } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: IUser[]) => { this.users = users; });
  }
  editUser(user: IUser) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.router.navigate(['/edit-user'], {
      queryParams: {
        id: user.id, firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        phone: user.phone
      }, queryParamsHandling: 'merge'
    });
  }

  goDeleteUser(id: IUser): void {
    // this.router.navigate(['/delete-user'], {queryParams: {id: user.id}, queryParamsHandling: 'merge'}  );
    this.router.navigate(['delete-user'], { queryParams: { id: id }, queryParamsHandling: 'merge' });

    // tslint:disable-next-line:no-debugger
        debugger;
  }
}

