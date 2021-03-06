import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  componentName: string;
  ipType: string;
  border: string;
  dynaWd: string = "200px";
  outData: string;
  control : Control;
  
  constructor() {
    this.componentName = 'Android';
    this.ipType = 'button';
    this.border = '1px solid red';
  }

  onePlusOne() {
    return 1 + 1;
  }

  changeBorder() {
    this.border = '1px solid blue';
  }

  myData(dt: string) {
    this.outData = dt;
  }
}

export class Control {
  control: string;
  val: string;
}