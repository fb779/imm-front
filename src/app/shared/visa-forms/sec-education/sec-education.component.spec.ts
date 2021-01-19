import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEducationComponent } from './sec-education.component';

describe('SecEducationComponent', () => {
  let component: SecEducationComponent;
  let fixture: ComponentFixture<SecEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
