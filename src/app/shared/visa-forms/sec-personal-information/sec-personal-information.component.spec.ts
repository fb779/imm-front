import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecPersonalInformationComponent } from './sec-personal-information.component';

describe('SecPersonalInformationComponent', () => {
  let component: SecPersonalInformationComponent;
  let fixture: ComponentFixture<SecPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
