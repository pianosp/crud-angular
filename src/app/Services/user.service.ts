import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentService } from './department.service';

export interface UserResponse{
  id: any
  name: string
  departmentId: string
}
export interface DepartmentResponse{
  id: any
  dname: string
  location: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private departmentService: DepartmentService) { }
  saveUser(inputData: object){
    return this.httpClient.post('https://localhost:7269/api/Users', inputData);
  }
  
  getUsers(){
    return this.httpClient.get('https://localhost:7269/api/Users');
  }

  getUserById(userId: number) {
    return this.httpClient.get(`https://localhost:7269/api/Users/${userId}`);
}

  updateUser(inputData: object, userId: number){
    return this.httpClient.put(`https://localhost:7269/api/Users/${userId}`, inputData);
  }

  deleteUser(userId: number){
    return this.httpClient.delete(`https://localhost:7269/api/Users/${userId}`);
  }
  getDepartmentLists() {
    return this.departmentService.getDepartmentLists();
  }
}
