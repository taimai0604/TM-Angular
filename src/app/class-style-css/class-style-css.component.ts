import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-css',
  templateUrl: './class-style-css.component.html',
  styleUrls: ['./class-style-css.component.css']
})
export class ClassStyleCssComponent implements OnInit {
  myClass = "red-title";

  booleanMyClass = false;

  myClassess = {
    'red-title': true,
    'class-non-underline': true
  }

  styleTitleColor = 'green';

  booleanStyleTitleColor = false;

  styleTitles = {
    'color': 'yellow',
    'font-size': '4em'
  }
  constructor() { }

  ngOnInit() {
  }

}
