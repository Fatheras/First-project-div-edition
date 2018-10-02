import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.url + id);
  }
  createUser(user: IUser) {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.post(this.url, user);
  }

  editUser(user: IUser) {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.put(this.url + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + id);
  }
}
