import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

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
  checkParams() {
    return this.id && this.name && this.email && this.phone && this.address && this.salary && this.dni && this.yearOfBirth;
  }

  updateEmployee() {
    if(this.checkParams()){
      this.employeeService.updateEmployee({
        id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        salary: this.salary,
        dni: this.dni,
        yearOfBirth: this.yearOfBirth
      },this.id).subscribe(() => {
        alert('Employee updated successfully');
        this.router.navigate(['/'])
      });
    }
    else{
      alert('Please fill all the fields');
    }
  }
}
