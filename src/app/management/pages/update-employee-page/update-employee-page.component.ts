import { Component } from '@angular/core';
import {UpdateEmployeeComponent} from "../../components/update-employee/update-employee.component";

@Component({
  selector: 'app-update-employee-page',
  standalone: true,
  imports: [
    UpdateEmployeeComponent
  ],
  templateUrl: './update-employee-page.component.html',
  styleUrl: './update-employee-page.component.css'
})
export class UpdateEmployeePageComponent {

}
