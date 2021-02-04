import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecWpInformationComponent } from './sec-wp-information.component';

describe('SecWpInformationComponent', () => {
  let component: SecWpInformationComponent;
  let fixture: ComponentFixture<SecWpInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecWpInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecWpInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
