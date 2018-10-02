import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { IUser } from '../models/User';
import { UserService } from '../shared/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  url = 'http://localhost:3000/api/v1/';
  users: IUser[];
  user: IUser;
  idToDelete: number;
  showUser: boolean;
  /* @ViewChild('createModal') createModal: ElementRef;
   @ViewChild('editModal') editModal: ElementRef;
   @ViewChild('deleteModal') deleteModal: ElementRef;
   @ViewChild('getUserModal') getUserModal: ElementRef; */

  createUserForm: FormGroup;
  editUserForm: FormGroup;
  getUserForm: FormGroup;


  constructor(private userService: UserService, private modalService: NgbModal) { }
  ngOnInit() {
    this.getUsers();
    this.createFormGroup();
    this.createEditUserForm();
    this.createGetUserForm();
  }

  get firstName() { return this.createUserForm.get('firstName'); }
  get lastName() { return this.createUserForm.get('lastName'); }
  get address() { return this.createUserForm.get('address'); }
  get phone() { return this.createUserForm.get('phone'); }

  get editFirstName() { return this.editUserForm.get('firstName'); }
  get editLastName() { return this.editUserForm.get('lastName'); }
  get editAddress() { return this.editUserForm.get('address'); }
  get editPhone() { return this.editUserForm.get('phone'); }

  get getId() { return this.getUserForm.get('id'); }

  createFormGroup() {
    this.createUserForm = new FormGroup({
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
  createGetUserForm() {
    this.getUserForm = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: IUser[]) => { this.users = users; });
  }

  getUser(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.userService.getUser(this.getUserForm.value.id)
       .subscribe((user: IUser) => {
         this.user = user;
         this.showUser = true;
         console.log(this.user);
        });
   }

  editUser(): void {
    const user = this.editUserForm.value;
    this.userService.editUser(user).subscribe(
      () => {
        this.getUsers();
        this.modalService.dismissAll();
      });
  }

  createUser(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    const user = this.createUserForm.value;
    this.userService.createUser(user).subscribe(
      () => {
        this.getUsers();
        this.modalService.dismissAll();
      });
  }

  deleteUser(): void {
    this.userService.deleteUser(this.idToDelete).subscribe(
      () => {
        this.getUsers();
        this.modalService.dismissAll();
      });
  }

  showCreateModal(showCreateModal: HTMLInputElement) {
    this.modalService.open(showCreateModal);
  }

  showGetUserModal(showGetUserModal: HTMLInputElement) {
    this.modalService.open(showGetUserModal);
  }

  showEditModal(showEditModal: HTMLInputElement, user: IUser) {
    this.editUserForm.controls['id'].setValue(user.id);
    this.editUserForm.controls['firstName'].setValue(user.firstName);
    this.editUserForm.controls['lastName'].setValue(user.lastName);
    this.editUserForm.controls['address'].setValue(user.address);
    this.editUserForm.controls['phone'].setValue(user.phone);
    this.modalService.open(showEditModal);
  }

  showDeleteModal(showDeleteModal: HTMLInputElement, id: number) {
    this.idToDelete = id;
    this.modalService.open(showDeleteModal);
  }
}

