import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStepsComponent } from './admin-steps.component';

describe('AdminStepsComponent', () => {
  let component: AdminStepsComponent;
  let fixture: ComponentFixture<AdminStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
