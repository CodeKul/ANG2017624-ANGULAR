import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
      usNm: ['', Validators.required],
      eml: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      pwd: ['', Validators.compose([Validators.required, this.isPwdStartFromA()])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  isPwdStartFromA(): ValidatorFn {
    return (ct: AbstractControl) => ct.value.charAt(0) === 'a' ? { err: 'Starts from a' } : null;
  }
}
