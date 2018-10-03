import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  // idToDelete: number;
  id: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserId();
  }

  getUserId() {
    this.route.queryParams
    .subscribe(params => {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.id = params.id;
    });
  }

  deleteUser(): void {
    this.userService.deleteUser(this.id).subscribe(
      () => {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.router.navigate(['users2']);
      });

      /*this.router.navigate(['/edit-user'], {
        queryParams: {
          id: user.id, firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          phone: user.phone
        }, queryParamsHandling: 'merge'
      }); */
  }

}
