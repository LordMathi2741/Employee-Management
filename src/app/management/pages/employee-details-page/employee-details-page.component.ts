import { Component } from '@angular/core';
import {EmployeeDetailsComponent} from "../../components/employee-details/employee-details.component";

@Component({
  selector: 'app-employee-details-page',
  standalone: true,
  imports: [
    EmployeeDetailsComponent
  ],
  templateUrl: './employee-details-page.component.html',
  styleUrl: './employee-details-page.component.css'
})
export class EmployeeDetailsPageComponent {

}
