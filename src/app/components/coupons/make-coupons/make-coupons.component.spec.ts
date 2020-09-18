import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCouponsComponent } from './make-coupons.component';

describe('MakeCouponsComponent', () => {
  let component: MakeCouponsComponent;
  let fixture: ComponentFixture<MakeCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
