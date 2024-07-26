import { Component, OnInit, ViewChild} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {DeleteEmployeeDialog} from "../delete-employee-dialog/delete-employee-dialog.component";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [
    MatColumnDef,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatIcon,
    MatButton,
    NgIf
  ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit{
  employeeData: Employee;
  dialog: DeleteEmployeeDialog;
  dataSource!: MatTableDataSource<any>
  isEditMode: boolean = false;
  isAdminMode: boolean = false;
  displayedColumns: string[] = ['no.', 'name', 'view', 'action'];
  @ViewChild(MatPaginator, { static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isDefaultMode: boolean = true;
  constructor(private employeeService: EmployeeService, private router:Router) {
    this.employeeData = {} as Employee;
    this.dataSource = new MatTableDataSource<any>();
    this.dialog = new DeleteEmployeeDialog();
  }

  private getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewEmployeeDetails(employeeId: number){
    this.router.navigate(['/employee-details']);
    sessionStorage.setItem('employeeId', employeeId.toString());
  }

  openDeleteEmployeeDialog(employeeId: number){
    this.dialog.openDialog(employeeId);
    sessionStorage.setItem('employeeId', employeeId.toString());
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  adminMode() {
    this.isEditMode = false;
    this.isDefaultMode = false;
    this.isAdminMode = !this.isAdminMode;
    this.checkDefaultMode();
  }

  defaultMode() {
    if(!this.isEditMode && !this.isAdminMode){
      this.isDefaultMode = true;
    }
  }

  editMode() {
    this.isAdminMode = false;
    this.isDefaultMode = false;
    this.isEditMode = !this.isEditMode;
    this.checkDefaultMode();
  }

  checkDefaultMode() {
    this.defaultMode();
  }

  goToCreateEmployee() {
    this.router.navigate(['/create-employee']);
  }

  goToUpdateEmployee() {
    this.router.navigate(['/update-employee']);
  }
}
