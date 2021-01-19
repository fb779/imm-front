import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWorkPermitComponent } from './form-work-permit.component';

describe('FormWorkPermitComponent', () => {
  let component: FormWorkPermitComponent;
  let fixture: ComponentFixture<FormWorkPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWorkPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWorkPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
