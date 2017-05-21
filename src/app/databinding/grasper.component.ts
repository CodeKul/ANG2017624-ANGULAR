import { Control } from './databinding.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grasper',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <input [type]="ipCtl.control" [value]="ipCtl.val"/>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class GrasperComponent implements OnInit {

  @Input() ipCtl: Control;

  constructor() { }

  ngOnInit() {
  }

}
