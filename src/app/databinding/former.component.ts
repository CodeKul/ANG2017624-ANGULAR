import { Control } from './databinding.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-former',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <input type="button" value="Text Box" class="btn btn-primary" (click)="form(1)"/>
        </div>
        <div class="col-md-6">
          <input type="button" value="Button" class="btn btn-primary" (click)="form(2)"/>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FormerComponent implements OnInit {

  @Output() formEv: EventEmitter<Control>;
  constructor() {
    this.formEv = new EventEmitter<Control>();
  }

  ngOnInit() {
  }

  form(which: number) {
    if (which === 1) {
      this.formEv.emit({ control: 'text', val: 'Ransomeware' });
    }
    else {
      let ctl: Control = new Control();
      ctl.control = 'button';
      ctl.val = 'Waana Cry';
      this.formEv.emit(ctl);
    }
  }
}
