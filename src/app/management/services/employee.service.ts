import { Injectable } from '@angular/core';
import {HttpCommonService} from "../../shared/http-common.service";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private baseService: HttpCommonService<Employee>) { }

  getEmployees() {
    return this.baseService.get('employees');
  }
  getEmployee(id: number) {
    return this.baseService.get('employees' + '/' + id);
  }
  deleteEmployee(id: number) {
    return this.baseService.delete('employees', id);
  }
  createEmployee(employee: Employee) {
    return this.baseService.post('employees', employee);
  }
  updateEmployee(employee: Employee, id: number) {
    return this.baseService.put('employees', employee, id);
  }
}
