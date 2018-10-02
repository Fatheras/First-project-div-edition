import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  idToDelete: number;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  deleteUser(): void {
    this.userService.deleteUser(this.idToDelete).subscribe(
      () => {
        this.router.navigate(['/users2']);
      });
  }

}
