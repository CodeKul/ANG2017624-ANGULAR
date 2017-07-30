import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/interval';

@Injectable()
export class HeavyService {

  constructor() { }

  processImage(callback): void {
    return Observable.create(obs => {
      for (let i = 0; i < 100000; i++) {
        obs.next(`${i}`);
      }
      obs.complete();
    }).subscribe(callback);
  }
}
