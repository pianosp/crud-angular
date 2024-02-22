import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentResponse, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent{

  user!: any;
  userId!: any;
  errors: any = [];
  departments!: DepartmentResponse[]; 


  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
    // alert(this.departmentId);
    this.userService.getUserById(this.userId).subscribe((res:any) => {
      console.log(res)
      this.user = res.user
    });

    this.userService.getDepartmentLists().subscribe((res: any) => {
      // console.log(res.department);
      this.departments = res.department;
    });
  }
  updateUser(){
    var inputData = {
      id: this.user.id,
      name: this.user.name,
      departmentId: this.user.departmentId
    }
    this.userService.updateUser(inputData, this.userId).subscribe({
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
