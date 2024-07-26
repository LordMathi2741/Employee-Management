import { Routes } from '@angular/router';
import {EmployeeManagementComponent} from "./management/pages/employee-management/employee-management.component";
import {EmployeeDetailsPageComponent} from "./management/pages/employee-details-page/employee-details-page.component";

export const routes: Routes = [
  {path:'', component: EmployeeManagementComponent},
  {path:'employee-details', component:EmployeeDetailsPageComponent}
];
