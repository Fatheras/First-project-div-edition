import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  id: number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe((params: ParamMap) => { this.id = +params['id']; });
  }

  ngOnInit() {
  }

  deleteUser(): void {
    this.userService.deleteUser(this.id).subscribe(
      () => {
        this.router.navigate(['users2']);
      });
  }
}
