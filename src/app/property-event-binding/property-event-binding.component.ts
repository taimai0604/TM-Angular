import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-event-binding',
  templateUrl: './property-event-binding.component.html',
  styleUrls: ['./property-event-binding.component.css']
})
export class PropertyEventBindingComponent implements OnInit {

  condition = false;

  logo = "http://techtrickz.com/wp-content/uploads/2017/03/customize-Android-O-nav-bar.jpg";

  myEvent(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
