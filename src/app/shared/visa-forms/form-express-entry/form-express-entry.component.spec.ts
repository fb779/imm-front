import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpressEntryComponent } from './form-express-entry.component';

describe('FormExpressEntryComponent', () => {
  let component: FormExpressEntryComponent;
  let fixture: ComponentFixture<FormExpressEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExpressEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpressEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
