import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFamilyMembersComponent } from './form-family-members.component';

describe('FormFamilyMembersComponent', () => {
  let component: FormFamilyMembersComponent;
  let fixture: ComponentFixture<FormFamilyMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFamilyMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFamilyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
