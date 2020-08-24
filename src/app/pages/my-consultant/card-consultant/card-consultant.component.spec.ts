import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultantComponent } from './card-consultant.component';

describe('CardConsultantComponent', () => {
  let component: CardConsultantComponent;
  let fixture: ComponentFixture<CardConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
