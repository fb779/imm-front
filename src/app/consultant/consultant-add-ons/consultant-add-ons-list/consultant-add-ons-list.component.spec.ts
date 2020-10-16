import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantAddOnsListComponent } from './consultant-add-ons-list.component';

describe('ConsultantAddOnsListComponent', () => {
  let component: ConsultantAddOnsListComponent;
  let fixture: ComponentFixture<ConsultantAddOnsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantAddOnsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantAddOnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
