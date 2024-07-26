import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {EmployeeService} from "../../services/employee.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    FormsModule

  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  id:number = 0;
  name:string = '';
  email:string = '';
  phone:string = '';
  address:string = '';
  salary:number = 0;
  dni:string = '';
  yearOfBirth:number = 0;

  constructor(private employeeService: EmployeeService,private router:Router) {

  }

  createEmployee() {
    if(this.checkParams()){
      this.employeeService.createEmployee({
        id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        salary: this.salary,
        dni: this.dni,
        yearOfBirth: this.yearOfBirth
      }).subscribe(() => {
        alert('Employee created successfully');
        this.router.navigate(['/'])
      });
    }
    else{
      alert('Please fill all the fields');
    }
  }

  checkParams() {
    return this.id && this.name && this.email && this.phone && this.address && this.salary && this.dni && this.yearOfBirth;
  }
}
