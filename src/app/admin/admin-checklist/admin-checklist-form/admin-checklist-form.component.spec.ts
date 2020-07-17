import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChecklistFormComponent } from './admin-checklist-form.component';

describe('AdminChecklistFormComponent', () => {
  let component: AdminChecklistFormComponent;
  let fixture: ComponentFixture<AdminChecklistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChecklistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChecklistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
