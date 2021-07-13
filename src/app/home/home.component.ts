import { Component } from "@angular/core";
import { UserPreferencesService } from "../employee/userPreferences.service";

@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  constructor(private _userPreferencesService: UserPreferencesService) {}

  get colour(): string {
    return this._userPreferencesService.colourPreference;
  }

  set colour(value: string) {
    this._userPreferencesService.colourPreference = value;
  }
}
