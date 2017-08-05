import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class JokeService {

  constructor(
    private http: Http
  ) { }

  randomJoke(resCallback) {
    this.http.get('httd://api.icndb.com/jokes/random').subscribe(res => {
      resCallback(res.json());
    }, this.errHndlr, this.compHndlr);
  }

  errHndlr(err) {
    console.log("Error Occured "+err);
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
