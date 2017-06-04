import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mobiles: string[];

  constructor() {
    this.mobiles = [];

    this.mobiles.push('Samsung');
    this.mobiles.push('Motorola');
    this.mobiles.push('Apple');
    this.mobiles.push('Microsoft');
    this.mobiles.push('Rim');
    this.mobiles.push('Lenevo');
    this.mobiles.push('Dell');
    this.mobiles.push('Nokia');
  }

  ngOnInit() {
  }
}
