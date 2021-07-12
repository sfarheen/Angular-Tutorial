import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeCountComponent } from "./employee/employeeCount.component";

import { SimpleComponent } from "./Others/simple.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./Others/pageNotFound.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
