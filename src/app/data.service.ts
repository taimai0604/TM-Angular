import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars =["ford","honda","audi"];

  myData(){
    return "this is my car";
  }
}
