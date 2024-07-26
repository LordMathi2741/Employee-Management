import { Component } from '@angular/core';
import {CreateEmployeeComponent} from "../../components/create-employee/create-employee.component";

@Component({
  selector: 'app-create-employee-page',
  standalone: true,
  imports: [
    CreateEmployeeComponent
  ],
  templateUrl: './create-employee-page.component.html',
  styleUrl: './create-employee-page.component.css'
})
export class CreateEmployeePageComponent {

}
