import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "my-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  empCode: string;

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params["code"];
    console.log("emp code is " + empCode);
    this.employee = this._employeeService.getEmployeesByCode(empCode);
    console.log("employee object is  " + this.employee.gender);
  }
}
