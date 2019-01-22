import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees:any = [];
  empDetailURL: string ="http://localhost:3000/empdetail"

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('http://localhost:3000/register').subscribe(res=> {
    this.employees = res;
    });
  }
  getEmpDetails(id) {
    return this.http.get(`${this.empDetailURL}/${id}`);
  }
 }
