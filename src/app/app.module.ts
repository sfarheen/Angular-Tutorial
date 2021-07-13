import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeCountComponent } from "./employee/employeeCount.component";

import { SimpleComponent } from "./Others/simple.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./Others/pageNotFound.component";

import { EmployeeService } from "./employee/employee.service";
import { UserPreferencesService } from "./employee/userPreferences.service";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/:code", component: EmployeeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService, UserPreferencesService]
})
export class AppModule {}
