import { HeavyService } from './heavy.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private heavy: HeavyService
  ) {
  }

  ngOnInit() {
    this.heavy.processImage(i => {
      console.log(`${i}`);
    });
  }

  postData(nm: string, age: string, mob: string) {
  }
}
