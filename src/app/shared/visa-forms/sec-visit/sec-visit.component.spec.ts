import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecVisitComponent } from './sec-visit.component';

describe('SecVisitComponent', () => {
  let component: SecVisitComponent;
  let fixture: ComponentFixture<SecVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
