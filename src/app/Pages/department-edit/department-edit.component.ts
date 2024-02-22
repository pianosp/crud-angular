import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent{

  departmentId!: any;
  department!: any;
  errors: any = [];

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) { }

  ngOnInit(){

    this.departmentId = this.route.snapshot.paramMap.get('id');
    // alert(this.departmentId);
    this.departmentService.getDepartment(this.departmentId).subscribe((res:any) => {
      console.log(res)
      this.department = res.department
    });
    

  }
  updateDepartment(){

    var inputData = {
      id: this.department.id,
      dname: this.department.dname,
      location: this.department.location
    }
    this.departmentService.updateDepartment(inputData, this.departmentId).subscribe({
      next: (res:any)=>{
        console.log(res);
        alert("Update Successfully");
      },
      error: (err:any) =>{
        this.errors = err.error.errors;
      }
    });
  }
}
