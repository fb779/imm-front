import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFamilyComponent } from './sec-family.component';

describe('SecFamilyComponent', () => {
  let component: SecFamilyComponent;
  let fixture: ComponentFixture<SecFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
