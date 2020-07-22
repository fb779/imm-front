import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisaCategoriesFormComponent } from './admin-visa-categories-form.component';

describe('AdminVisaCategoriesFormComponent', () => {
  let component: AdminVisaCategoriesFormComponent;
  let fixture: ComponentFixture<AdminVisaCategoriesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVisaCategoriesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVisaCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
