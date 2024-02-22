import { Component, OnInit } from '@angular/core';
import { UserResponse, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService: UserService) { }
  user!: UserResponse[];

  ngOnInit(){
    this.getUsers(); 
  }
  getUsers(){
    this.userService.getUsers().subscribe((res:any)=>{
      console.log(res.user);
      this.user = res.user
    });
  }
  deleteUser(event:any, userId: number){
    if(confirm('Are your sure to Delete this Data?')){
      event.target.innerText = "Deleting.."
      this.userService.deleteUser(userId).subscribe((res:any)=>{
        this.getUsers();
        alert("Delete Successfully");
      });;
    }
}
}
