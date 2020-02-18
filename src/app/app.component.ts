import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjanet-directory';

  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  yell(e) {
    alert("I am yelling: ");
  }

}
