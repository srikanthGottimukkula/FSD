import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;
  msg: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  private getEmployeesList() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  employeeDetails(id: number) {
    this.router.navigate(['view-employee', id]);
  }

  deleteEmployeeById(deleteEmpById: number) {
    this.employeeService.deleteEmployee(deleteEmpById).subscribe(data => {
      this.msg = data;
      this.getEmployeesList();
    });
  }

}
