import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisaCategoriesComponent } from './admin-visa-categories.component';

describe('AdminVisaCategoriesComponent', () => {
  let component: AdminVisaCategoriesComponent;
  let fixture: ComponentFixture<AdminVisaCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVisaCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVisaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
