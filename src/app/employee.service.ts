import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  getString(): Observable<Object> {
    return this._http.get("http://localhost:52350/api/employees");
  }

  getEmployees(): IEmployee[] {
    return [
      {
        code: "emp101",
        name: "Tom",
        gender: "Male",
        annualSalary: 5500,
        dateOfBirth: "6/25/1988"
      },
      {
        code: "emp102",
        name: "Alex",
        gender: "Male",
        annualSalary: 5700.95,
        dateOfBirth: "9/6/1982"
      },
      {
        code: "emp103",
        name: "Mike",
        gender: "Male",
        annualSalary: 5900,
        dateOfBirth: "12/8/1979"
      },
      {
        code: "emp104",
        name: "Mary",
        gender: "Female",
        annualSalary: 6500.826,
        dateOfBirth: "10/14/1980"
      },
      {
        code: "emp105",
        name: "Nancy",
        gender: "Female",
        annualSalary: 6700.826,
        dateOfBirth: "12/15/1982"
      },
      {
        code: "emp106",
        name: "Steve",
        gender: "Male",
        annualSalary: 7700.481,
        dateOfBirth: "11/11/1979"
      }
    ];
  }
}
