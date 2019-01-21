import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  sendUserRegistration(registerData) {
    this.httpClient.post('http://localhost:3000/register', registerData).subscribe(res =>{})
  }
}
