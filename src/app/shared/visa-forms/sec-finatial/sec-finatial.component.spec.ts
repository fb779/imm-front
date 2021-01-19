import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFinatialComponent } from './sec-finatial.component';

describe('SecFinatialComponent', () => {
  let component: SecFinatialComponent;
  let fixture: ComponentFixture<SecFinatialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecFinatialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFinatialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
