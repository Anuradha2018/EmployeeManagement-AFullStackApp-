import { EmployeesService } from './../../services/employees.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  
  constructor(private employeeService:EmployeesService,
    private router: Router) { }

  ngOnInit() {
    this.showEmployees();
  }
  showEmployees() {
    return this.employeeService.getEmployees();
  }
  onSelect(e) {
    this.router.navigate(['/empdetail',e._id]);
  }

}
