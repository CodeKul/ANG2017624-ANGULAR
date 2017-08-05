import { JokeService } from './joke.service';
import { HeavyService } from './heavy.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  jk: string;
  constructor(
    private jkSer: JokeService
  ) {
  }

  ngOnInit() {

  }

  postData(nm: string, age: string, mob: string) {
    this.jkSer.postData({
      nm: nm, age: age, mob: mob
    }, res => {
      this.jk = `data poseted successfully`;
    });
  }

  randmJk() {
    this.jkSer.randomJoke(joke => {
      console.log(joke);
      this.jk = joke.value.joke;
    });
  }
}
