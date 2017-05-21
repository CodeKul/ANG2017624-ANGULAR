import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrasperComponent } from './grasper.component';

describe('GrasperComponent', () => {
  let component: GrasperComponent;
  let fixture: ComponentFixture<GrasperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrasperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrasperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
