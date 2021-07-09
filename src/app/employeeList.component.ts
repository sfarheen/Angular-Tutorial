import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "list-employee",
  templateUrl: "./employeeList.component.html",
  styleUrls: ["./employeeList.component.css"],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[];
  str: String = "Tom";
  selectedEmployeeCountRadioButton: string = "All";

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.str = this._employeeService.getString().subscribe();
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
