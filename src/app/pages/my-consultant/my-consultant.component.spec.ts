import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConsultantComponent } from './my-consultant.component';

describe('MyConsultantComponent', () => {
  let component: MyConsultantComponent;
  let fixture: ComponentFixture<MyConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
