import { Component, OnInit } from '@angular/core';
import { DepartmentResponse, DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent{

  constructor(private departmentService: DepartmentService) { }

  department!: DepartmentResponse[];

ngOnInit(){
  this.getDepartmentLists(); 
}
getDepartmentLists(){
  this.departmentService.getDepartmentLists().subscribe((res:any)=>{
    // console.log(res.department);
    this.department = res.department
  });
}
deleteDepartment(event:any, departmentId: number){
  if(confirm('Are your sure to Delete this Data?')){
    event.target.innerText = "Deleting.."
    this.departmentService.deleteDepartmenr(departmentId).subscribe((res:any)=>{
      this.getDepartmentLists();
      alert("Delete Successfully");
    });;
  }


}
}
