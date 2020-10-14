import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOnsListComponent } from './admin-add-ons-list.component';

describe('AdminAddOnsListComponent', () => {
  let component: AdminAddOnsListComponent;
  let fixture: ComponentFixture<AdminAddOnsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOnsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
