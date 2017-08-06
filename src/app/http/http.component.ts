import { JokeService } from './joke.service';
import { HeavyService } from './heavy.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {
  jk: string;
  sub: Subscription;


  constructor(
    private jkSer: JokeService
  ) {
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  postData(nm: string, age: string, mob: string) {
    this.jkSer.postData({
      nm: nm, age: age, mob: mob
    }, res => {
      this.jk = `data poseted successfully`;
    });
  }

  randmJk() {
    // this.jkSer.randomJoke(joke => {
    //   console.log(joke);
    //   this.jk = joke.value.joke;
    // });

    this.jkSer.randomJoke().subscribe(res => {
      console.log(res);
    }, err => { }, () => { });
  }
}
