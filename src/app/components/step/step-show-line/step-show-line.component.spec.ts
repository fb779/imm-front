import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepShowLineComponent } from './step-show-line.component';

describe('StepShowLineComponent', () => {
  let component: StepShowLineComponent;
  let fixture: ComponentFixture<StepShowLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepShowLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepShowLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
