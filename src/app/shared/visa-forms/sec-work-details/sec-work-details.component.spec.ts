import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecWorkDetailsComponent } from './sec-work-details.component';

describe('SecWorkDetailsComponent', () => {
  let component: SecWorkDetailsComponent;
  let fixture: ComponentFixture<SecWorkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecWorkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
