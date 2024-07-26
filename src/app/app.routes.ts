import { Routes } from '@angular/router';
import {EmployeeManagementComponent} from "./management/pages/employee-management/employee-management.component";
import {EmployeeDetailsPageComponent} from "./management/pages/employee-details-page/employee-details-page.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {CreateEmployeePageComponent} from "./management/pages/create-employee-page/create-employee-page.component";
import {UpdateEmployeePageComponent} from "./management/pages/update-employee-page/update-employee-page.component";

export const routes: Routes = [
  {path:'', component: EmployeeManagementComponent},
  {path:'employee-details', component:EmployeeDetailsPageComponent},
  {path:'create-employee', component:CreateEmployeePageComponent},
  {path:'update-employee', component:UpdateEmployeePageComponent},
  {path:'**', component:PageNotFoundComponent}
];
