import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  sendEmpRegistration(registerData) {
    this.httpClient.post('http://localhost:3000/register', registerData).subscribe(res =>{

    });
  }
  sendUserLogin(loginData) {
  this.httpClient.post('http://localhost:3000/login', loginData).subscribe(res =>{
      console.log(res);
      localStorage.setItem('token',JSON.stringify(res));
      JSON.parse(localStorage.getItem('token'));
    });
    
  }
}
