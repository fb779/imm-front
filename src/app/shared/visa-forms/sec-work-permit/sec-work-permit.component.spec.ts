import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecWorkPermitComponent } from './sec-work-permit.component';

describe('SecWorkPermitComponent', () => {
  let component: SecWorkPermitComponent;
  let fixture: ComponentFixture<SecWorkPermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecWorkPermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecWorkPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
