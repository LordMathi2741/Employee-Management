import { Component } from '@angular/core';
import {EmployeeTableComponent} from "../../components/employee-table/employee-table.component";

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [
    EmployeeTableComponent
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent {

}
