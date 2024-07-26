

import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {EmployeeService} from "../../services/employee.service";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {Router} from "@angular/router";

/**
 * @title Dialog elements
 */
@Component({
  selector: 'delete-employee-dialog-component',
  templateUrl: 'delete-employee-dialog-reference.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogClose],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteEmployeeDialog {
  readonly dialog = inject(MatDialog);
  openDialog(employeeId: any) {
    this.dialog.open(DeleteEmployeeDialogComponent);
    sessionStorage.setItem('employeeId',employeeId);
  }
}

@Component({
  selector: 'delete-employee-dialog-component',
  templateUrl: 'delete-employee-dialog.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteEmployeeDialogComponent {
  employeeId: any;
  constructor(private employeeService: EmployeeService, private router:Router) {
    this.employeeId = sessionStorage.getItem('employeeId');
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(() => {
      alert("Employee deleted successfully");
    });
  }

  clearEmployeeId() {
    sessionStorage.removeItem('employeeId');
  }

}
