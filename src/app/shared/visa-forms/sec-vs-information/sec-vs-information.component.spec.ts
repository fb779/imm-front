import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecVsInformationComponent } from './sec-vs-information.component';

describe('SecVsInformationComponent', () => {
  let component: SecVsInformationComponent;
  let fixture: ComponentFixture<SecVsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecVsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecVsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
