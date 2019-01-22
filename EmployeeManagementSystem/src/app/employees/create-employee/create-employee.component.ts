import { Department } from "./../../models/department";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto: boolean = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  registerData = {};

  departments: Department[] = [
    { name: "Help Desk" },
    { name: "HR" },
    { name: "IT" },
    { name: "R&D" },
    { name: "Finance" },
    { name: "Accounts" },
    { name: "Sales&Marketing" },
    { name: "Procurement" },
  ];
  constructor(private authService: AuthService) {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        dateInputFormat: "DD/MM/YYYY",
      }
    );
  }

  ngOnInit() {}
  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  post() {
    console.log(this.registerData);
    this.authService.sendEmpRegistration(this.registerData);
  }
}
