import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DepartmentResponse{
    id: any
    dname: string
    location: string
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }
  saveDepartment(inputData: object){
    return this.httpClient.post('https://localhost:7269/api/Departments', inputData);
  }
  
  getDepartmentLists(){
    return this.httpClient.get('https://localhost:7269/api/Departments');
  }

  getDepartment(departmentId: number) {
    return this.httpClient.get(`https://localhost:7269/api/Departments/${departmentId}`);
}

  updateDepartment(inputData: object, departmentId: number){
    return this.httpClient.put(`https://localhost:7269/api/Departments/${departmentId}`, inputData);
  }

  deleteDepartmenr(departmentId: number){
    return this.httpClient.delete(`https://localhost:7269/api/Departments/${departmentId}`);
  }

}
