import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemOneComponent } from './rem-one.component';

describe('RemOneComponent', () => {
  let component: RemOneComponent;
  let fixture: ComponentFixture<RemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
