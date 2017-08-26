import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-services',
  templateUrl: './demo-services.component.html',
  styleUrls: ['./demo-services.component.css']
})
export class DemoServicesComponent implements OnInit {

  constructor(private myData: DataService) {

  }

  someProperty: String = '';

  ngOnInit() {
    console.log(this.myData.cars);
    this.someProperty = this.myData.myData() + " : " + this.myData.cars[1];
  }
}
