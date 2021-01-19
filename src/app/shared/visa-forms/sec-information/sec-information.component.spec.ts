import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecInformationComponent } from './sec-information.component';

describe('SecInformationComponent', () => {
  let component: SecInformationComponent;
  let fixture: ComponentFixture<SecInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
