import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  sendEmpRegistration(registerData) {
    this.httpClient.post('http://localhost:3000/register', registerData).subscribe(res =>{})
  }
  sendUserLogin(registerData) {
    this.httpClient.post('http://localhost:3000/login', registerData).subscribe(res =>{})
  }

}
