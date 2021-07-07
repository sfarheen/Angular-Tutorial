import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "simple",
  templateUrl: "./simple.component.html"
})
export class SimpleComponent implements OnChanges {
  @Input() simpleInput: string;

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(
        propertyName +
          ": Current Value =  " +
          current +
          ", Previous Value = " +
          previous
      );
    }
  }
}
