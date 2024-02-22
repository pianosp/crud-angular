import { Component, OnInit } from '@angular/core';
import { DepartmentResponse, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent{

  constructor(private userService: UserService) { }

  name!: string
  departmentId!: string
  departments!: DepartmentResponse[]; 

  errors: any = []

  saveUser(){
    var inputData = {
      name: this.name,
      departmentId: this.departmentId
    }

    this.userService.saveUser(inputData).subscribe({
      next: (res: any)=>{
        console.log(res,'response')
        alert("Create Successfully");
        this.name = '';
        this.departmentId = '';
      },
      error: (err: any)=>{
        this.errors = err.error.errors;
        console.log(err.error.errors, 'error')
      }
    })
  }
  
  ngOnInit() {
    this.userService.getDepartmentLists().subscribe((res: any) => {
      // console.log(res.department);
      this.departments = res.department;
    });

  }
}
