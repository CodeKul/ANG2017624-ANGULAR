import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <input type="text" #mySal [value]="nm"/>
            <input type="button" (click)="upperCase(mySal.value)" />
            Double the Pf = {{pfDouble}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ViewChildComponent {

  @ViewChild('mySal') mySal: ElementRef;

  nm: number;
  pfDouble: number;

  pf = bs => (bs * 12) / 100;

  constructor() { }

  upperCase(nm: string) {
    this.nm = this.pf(parseInt(nm));

    this.pfDouble = this.pf(parseInt(this.mySal.nativeElement.value)) * 2;
    console.log(`Name iss ${this.nm}`);
    alert(`Hello world ${1 + 1}`);
  }
}
