import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpdetailComponent } from './employees/empdetail/empdetail.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const appRoutes: Routes = [
  { path:'empdetail/:id', component:EmpdetailComponent },
  { path:'register', component: RegisterUserComponent },
  { path:'login', component: LoginComponent },
  { path:'list', component: ListEmployeesComponent },
  { path:'create', component: CreateEmployeeComponent },
  { path:'', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    LoginComponent,
    NavbarComponent,
    EmpdetailComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
