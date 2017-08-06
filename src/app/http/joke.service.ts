import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  constructor(
    private http: Http
  ) { }

  randomJoke(resCallback?): Observable<any> {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map(res => res.json())
      .catch(err => 'Error caught');
  }

  errHndlr(err: Response) {
    console.log("Error Occured " + err);
  }

  compHndlr() {
  }

  postData(dataObj: any, resCallback) {
    this.http.post('https://digital-shelter-153912.firebaseio.com/newData.json', {
      nm: dataObj.nm,
      age: dataObj.age,
      mob: dataObj.mob
    }).subscribe(res => {
      resCallback(res.json());
    }, this.errHndlr, this.compHndlr);
  }
}
