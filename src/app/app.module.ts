import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './Pages/department/department/department.component';
import { UserComponent } from './Pages/user/user/user.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { DepartmentCreateComponent } from './Pages/department-create/department-create.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentEditComponent } from './Pages/department-edit/department-edit.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    UserComponent,
    NavbarComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
