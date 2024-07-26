export class Employee {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  salary: number;
  dni: string;
  yearOfBirth: number;

  private constructor(id:number, name:string, address:string, phone:string, email:string, salary:number, dni:string, yearOfBirth:number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.salary = salary;
    this.dni = dni;
    this.yearOfBirth = yearOfBirth;
  }

  public static _instance: Employee;
}
