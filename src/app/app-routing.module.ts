import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent},
  {path:"create-employee", component:CreateEmployeeComponent},
  {path:"update-employee/:id", component:UpdateEmployeeComponent},
  {path:"view-employee/:id", component:ViewEmployeeComponent},
  {path:"",redirectTo:"employees",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
