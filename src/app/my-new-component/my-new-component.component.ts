import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  myObject={
    gender: 'male',
    age: 22,
    name: 'Tai Mai'
  }

  myArr = ['nam','nữ','không xác định'];
  
  condition1 = 'not connect';

  condition = true;
  
  constructor() { }

  ngOnInit() {
  }

}
