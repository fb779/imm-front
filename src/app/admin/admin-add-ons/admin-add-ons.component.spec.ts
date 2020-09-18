import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOnsComponent } from './admin-add-ons.component';

describe('AdminAddOnsComponent', () => {
  let component: AdminAddOnsComponent;
  let fixture: ComponentFixture<AdminAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
