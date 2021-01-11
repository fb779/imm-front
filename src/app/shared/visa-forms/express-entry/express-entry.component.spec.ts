import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressEntryComponent } from './express-entry.component';

describe('ExpressEntryComponent', () => {
  let component: ExpressEntryComponent;
  let fixture: ComponentFixture<ExpressEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
