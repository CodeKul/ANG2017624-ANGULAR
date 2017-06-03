import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <input type="text" #myName [value]="nm"/>
            <input type="button" (click)="upperCase(myName.value)" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ViewChildComponent {

  nm: number;
  pf = bs => (bs * 12) / 100;

  constructor() { }

  upperCase(nm: string) {
    this.nm = this.pf(parseInt(nm));
  }
}
