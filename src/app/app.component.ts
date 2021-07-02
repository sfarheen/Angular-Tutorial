import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classesToApply: string = 'boldClass italicsClass';

  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
    return classes;
  }
}
