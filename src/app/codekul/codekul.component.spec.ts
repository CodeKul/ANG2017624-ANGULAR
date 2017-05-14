import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodekulComponent } from './codekul.component';

describe('CodekulComponent', () => {
  let component: CodekulComponent;
  let fixture: ComponentFixture<CodekulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodekulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodekulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
