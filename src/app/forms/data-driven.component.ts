import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private builder: FormBuilder
  ) {
    this.formGroup = builder.group({
      usNm: '',
      eml: '',
      pwd: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
