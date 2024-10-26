import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: Router) { }
  ngOnInit(): void {

  }
  saveEmployee() {
    this.employeeService.createEmployees(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error)
    )
  }

  goToEmployeeList() {
    this.route.navigate(['/employees']);
  }

  onSubmit() {
    console.log("submitted");
    this.saveEmployee();
  }
}
