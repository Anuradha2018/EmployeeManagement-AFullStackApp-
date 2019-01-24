
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userData={};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  post() {
    console.log(this.userData);
    this.authService.sendUserRegistration(this.userData);
  }
}
