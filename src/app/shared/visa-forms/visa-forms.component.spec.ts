import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaFormsComponent } from './visa-forms.component';

describe('VisaFormsComponent', () => {
  let component: VisaFormsComponent;
  let fixture: ComponentFixture<VisaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
