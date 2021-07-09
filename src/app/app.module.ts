import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee.component";
import { EmployeeListComponent } from "./employeeList.component";
import { EmployeeCountComponent } from "./employeeCount.component";

import { SimpleComponent } from "./Others/simple.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    SimpleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
