import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { DeleteUserComponent } from './user/components/delete-user/delete-user.component';
import { CreateEditUserComponent } from './user/components/create-edit-user/create-edit-user.component';
import { GetUserComponent } from './user/components/get-user/get-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    DeleteUserComponent,
    CreateEditUserComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
