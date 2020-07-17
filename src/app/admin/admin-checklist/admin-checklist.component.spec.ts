import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChecklistComponent } from './admin-checklist.component';

describe('AdminChecklistComponent', () => {
  let component: AdminChecklistComponent;
  let fixture: ComponentFixture<AdminChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
