import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { IUser } from '../../../models/User';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.css']
})
export class CreateEditUserComponent implements OnInit {
  user: IUser;
  id: number;
  editUserForm: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: ParamMap) => { this.id = +params['id']; });
  }

  ngOnInit() {
    this.getUser();
    this.createEditUserForm();
  }
  get editFirstName() { return this.editUserForm.get('firstName'); }
  get editLastName() { return this.editUserForm.get('lastName'); }
  get editAddress() { return this.editUserForm.get('address'); }
  get editPhone() { return this.editUserForm.get('phone'); }

  getUser(): void {
    if (this.id > 0) {
      this.userService.getUser(this.id).subscribe((response: IUser) => {
        this.user = response;
        this.UpdateFormFromParams();
      });
    }
  }

  createEditUserForm() {
    this.editUserForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(12)])
    });
  }

  UpdateFormFromParams() {
    if (this.user) {
      this.editUserForm.controls['id'].setValue(this.user.id);
      this.editUserForm.controls['firstName'].setValue(this.user.firstName);
      this.editUserForm.controls['lastName'].setValue(this.user.lastName);
      this.editUserForm.controls['address'].setValue(this.user.address);
      this.editUserForm.controls['phone'].setValue(this.user.phone);
    }
  }
  createEditUser() {
    const formUser = this.editUserForm.value;
    if (formUser.id > 0) {
      this.userService.editUser(formUser).subscribe(
        () => {
        });
    } else {
      this.userService.createUser(formUser).subscribe(
        () => {
        });
    }
  }
}
