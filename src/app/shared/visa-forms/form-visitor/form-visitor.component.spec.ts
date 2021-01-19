import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisitorComponent } from './form-visitor.component';

describe('FormVisitorComponent', () => {
  let component: FormVisitorComponent;
  let fixture: ComponentFixture<FormVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
