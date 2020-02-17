import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Title works!";
  myString = "i love binding";

  @Input() ninja;

  constructor() { }

  ngOnInit() {
  }

  alertMe() {
    alert("You clicked me! Thanks!");
  }

}
