import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAddOnsFormComponent } from './consultant-add-ons-form.component';

describe('ConsultantAddOnsFormComponent', () => {
  let component: ConsultantAddOnsFormComponent;
  let fixture: ComponentFixture<ConsultantAddOnsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantAddOnsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantAddOnsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
