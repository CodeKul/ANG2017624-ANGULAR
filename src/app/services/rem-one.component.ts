import { RemoteService } from './remote.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rem-one',
  template: `
   <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li *ngFor="let nm of names">{{nm}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <input type="text" #nm/><input type="button" (click)="addNew(nm.value)" class="btn btn-primary" value="Add"/>
        </div>
      </div>
    </div>
  `,
  styles: []
  // providers: [RemoteService]
})
export class RemOneComponent {

  names: string[];
  constructor(
    private remote: RemoteService
  ) {
    this.names = remote.getNames();
  }

  addNew(nm: string) {
    this.remote.addName(nm);
    this.remote.publish(nm);
  }
}
