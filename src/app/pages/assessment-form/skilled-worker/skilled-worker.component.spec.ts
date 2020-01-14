import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledWorkerComponent } from './skilled-worker.component';

describe('SkilledWorkerComponent', () => {
  let component: SkilledWorkerComponent;
  let fixture: ComponentFixture<SkilledWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilledWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
