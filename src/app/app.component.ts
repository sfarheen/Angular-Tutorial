import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
 
  pageHeader2: string = null;

  imagePath: string =
    'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';

  firstName: string = 'Tom';
  lastName: string = 'Hopkins';

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
