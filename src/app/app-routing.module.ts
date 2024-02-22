import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Pages/department/department/department.component';
import { UserComponent } from './Pages/user/user/user.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';
import { DepartmentEditComponent } from './Pages/department-edit/department-edit.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

const routes: Routes = [
  {path:'', component: DepartmentComponent, title: 'Department'},
  {path:'users', component: UserComponent, title: 'User'},
  {path:'users/create', component: UserCreateComponent, title: 'Create User'},
  {path:'users/users/edit/:id', component: UserEditComponent, title: 'Edit User'},
  {path:'department/create', component: DepartmentCreateComponent, title: 'Create Department'},
  {path:'department/edit/:id', component: DepartmentEditComponent, title: 'Edit Department'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
