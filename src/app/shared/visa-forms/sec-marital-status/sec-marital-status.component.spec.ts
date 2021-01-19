import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecMaritalStatusComponent } from './sec-marital-status.component';

describe('SecMaritalStatusComponent', () => {
  let component: SecMaritalStatusComponent;
  let fixture: ComponentFixture<SecMaritalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecMaritalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
