import { Department } from './../../models/department';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'R&D' },
    { id: 5, name: 'Finance' },
    { id: 6, name: 'Accounts' },
    { id: 7, name: 'Sales&Marketing' },
    { id: 8, name: 'Procurement' },

  ];
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

}
