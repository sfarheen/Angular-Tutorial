import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";
import { UserPreferencesService } from "../employee/userPreferences.service";

@Component({
  selector: "list-employee",
  templateUrl: "./employeeList.component.html",
  styleUrls: ["./employeeList.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  str: String = "Tom";
  selectedEmployeeCountRadioButton: string = "All";

  constructor(
    private _employeeService: EmployeeService,
    private _userPreferencesService: UserPreferencesService
  ) {}

  get colour(): string {
    return this._userPreferencesService.colourPreference;
  }

  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
  }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    //this.str = this._employeeService.getString().subscribe();
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === "Male").length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === "Female").length;
  }
}
