import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {Router} from "@angular/router";
import {Employee} from "../../models/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  employeeData : Employee;
  employeeService: EmployeeService;
  employeeId: any;
  constructor(private router: Router, employeeService: EmployeeService) {
    this.employeeData = Employee._instance;
    this.employeeService = employeeService;
    this.employeeId = sessionStorage.getItem('employeeId');
  }
  backToHomePage(){
    this.router.navigate(['/']);
    this.removeCurrentEmployeeId();
  }
  getEmployeeData(){
    this.employeeService.getEmployee(this.employeeId).subscribe((data: any) => {
          this.employeeData = data;
    });
  }

  removeCurrentEmployeeId(){
    sessionStorage.removeItem('employeeId');
  }

  ngOnInit() {
    this.getEmployeeData();
  }

}
