import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  money: number;
  dt: Date;
  os: string;
  st: string = 'A';

  obj = {
    curr: 200,
    dt: new Date()
  };

  mobiles = [
    'Android',
    'iOS',
    'Rim',
    'Windows',
    'Bada',
    'Rasbian',
    'WebOs'
  ];

  constructor() {
    this.money = 45;
    this.dt = new Date();
    this.os = 'android';
  }

  ngOnInit() {
  }

  onNewData(dt: string) {
    this.mobiles.push(dt);
  }
}
