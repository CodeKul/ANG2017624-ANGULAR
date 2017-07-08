import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  myForm: NgForm;
  myData = {
    userName: '',
    email: '',
    password: '',
    mob: ''
  };

  mobiles = ['Android', 'iOS', 'Windows', 'BB'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    this.myForm = myForm;

    console.log(this.myForm);
  }
}
