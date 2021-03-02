import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  // Variables
  buttonPressed: number = 0;
  hidden: boolean = true;

  // Method
  count() {
    this.buttonPressed++;
  }

  show() {

    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }
}
