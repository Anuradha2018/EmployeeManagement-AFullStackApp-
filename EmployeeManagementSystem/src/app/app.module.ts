import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path:'list', component: ListEmployeesComponent },
  { path:'create', component: CreateEmployeeComponent },
  { path:'login', component: LoginComponent},
  { path:'', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
