import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAddOnsComponent } from './consultant-add-ons.component';

describe('ConsultantAddOnsComponent', () => {
  let component: ConsultantAddOnsComponent;
  let fixture: ComponentFixture<ConsultantAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
