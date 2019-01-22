import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './../../models/employee';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
emp: any=[];
  constructor(private employeeService:EmployeesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmpDetails(id).subscribe(data =>{
      console.log(data);
       this.emp = data;
    });
    } 
}
