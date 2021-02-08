import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFamilyInfoComponent } from './sec-family-info.component';

describe('SecFamilyInfoComponent', () => {
  let component: SecFamilyInfoComponent;
  let fixture: ComponentFixture<SecFamilyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecFamilyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFamilyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
