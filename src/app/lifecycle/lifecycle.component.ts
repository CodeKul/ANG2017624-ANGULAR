import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() life: boolean;

  constructor() { }

  ngOnChanges() {
    this.lg('ngOnChanges');
  }
  ngDoCheck() {
    this.lg('ngDoCheck');
  }
  ngOnInit() {
    this.lg('ngOnInit');
  }

  ngAfterContentInit() {
    this.lg('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.lg('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.lg('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.lg('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.lg('ngOnDestroy');
  }

  lg(msg: string) {
    console.log(msg);
  }
}
