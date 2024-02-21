import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Pages/department/department/department.component';
import { UserComponent } from './Pages/User/user/user.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';
import { DepartmentEditComponent } from './Pages/department-edit/department-edit.component';

const routes: Routes = [
  {path:'', component: DepartmentComponent, title: 'Department'},
  {path:'users', component: UserComponent, title: 'User'},
  {path:'department/create', component: DepartmentCreateComponent, title: 'Create Department'},
  {path:'department/edit/:id', component: DepartmentEditComponent, title: 'Edit Department'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
