import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-content-child',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <ng-content></ng-content>
          </div>
          <div>
            <input type="button" (click)="makeItUpper()"/>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContentChildComponent implements OnInit {

  @ContentChild('fees') fess: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  makeItUpper() {
    this.fess.nativeElement.value = this.fess.nativeElement.value.toUpperCase();
  }
}
