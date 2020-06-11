import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFamilyMemberComponent } from './delete-family-member.component';

describe('DeleteFamilyMemberComponent', () => {
  let component: DeleteFamilyMemberComponent;
  let fixture: ComponentFixture<DeleteFamilyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFamilyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFamilyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
