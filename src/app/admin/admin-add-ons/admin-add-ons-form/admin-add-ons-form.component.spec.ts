import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOnsFormComponent } from './admin-add-ons-form.component';

describe('AdminAddOnsFormComponent', () => {
  let component: AdminAddOnsFormComponent;
  let fixture: ComponentFixture<AdminAddOnsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOnsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOnsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
