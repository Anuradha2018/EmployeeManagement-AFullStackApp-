import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  post() {
    console.log(this.loginData);
    this.apiService.sendUserLogin(this.loginData);
  }
}
