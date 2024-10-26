import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }
  
  getAllEmployees():Observable<Employee[]>{
return this.httpClient.get<Employee[]>(`${this.baseURL}/getEmps`)
  }

  createEmployees(employee:Employee):Observable<Object>{
    console.log(employee);
    return this.httpClient.post<any>(`${this.baseURL}/saveEmp`,employee)
  }

  getEmployeeById(id:number):Observable<Employee>{
return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put<any>(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployee(deleteEmpById:number):Observable<string>{
    
    return this.httpClient.delete(`${this.baseURL}/${deleteEmpById}`,{responseType:"text"});
  }

}
