import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent{

  constructor(private departmentServic: DepartmentService){}

  dname!: string
  location!: string

  errors: any = []

  saveDepartment(){
    var inputData = {
      dname: this.dname,
      location: this.location
    }

    this.departmentServic.saveDepartment(inputData).subscribe({
      next: (res: any)=>{
        console.log(res,'response')
        alert("Create Successfully");
        this.dname = '';
        this.location = '';
      },
      error: (err: any)=>{
        this.errors = err.error.errors;
        console.log(err.error.errors, 'error')
      }
    })
  }

}
