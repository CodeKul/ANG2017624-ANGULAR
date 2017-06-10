import { RemoteService } from './remote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-two',
  template: `
   <div class="container">
      <div class="row">
        <div class="col-md-12">
        {{changedName}}
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class RemTwoComponent implements OnInit {

  changedName: string;

  constructor(
    private remote: RemoteService
  ) {
    this.remote.subscribe(nm => this.changedName = nm);
  }
  ngOnInit() {
  }

}
