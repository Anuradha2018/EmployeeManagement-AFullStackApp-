import { EmployeesService } from './../../services/employees.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  // employees:Employee[];
  
  constructor(private employeeService:EmployeesService) { }

  ngOnInit() {
    this.showEmployees();
  }
  showEmployees() {
    return this.employeeService.getEmployees();
  }

}
