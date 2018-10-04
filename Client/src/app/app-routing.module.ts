import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { DeleteUserComponent } from './user/components/delete-user/delete-user.component';
import { CreateEditUserComponent } from './user/components/create-edit-user/create-edit-user.component';
import { GetUserComponent } from './user/components/get-user/get-user.component';

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'users2', component: UserListComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'create-user', component: CreateEditUserComponent },
  { path: 'edit-user/:id', component: CreateEditUserComponent },
  { path: 'edit-user', component: CreateEditUserComponent },
  { path: 'get-user', component: GetUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
