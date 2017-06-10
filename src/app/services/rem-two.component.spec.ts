import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemTwoComponent } from './rem-two.component';

describe('RemTwoComponent', () => {
  let component: RemTwoComponent;
  let fixture: ComponentFixture<RemTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
