import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SecFinancialComponent } from "./sec-financial.component";

describe("SecFinancialComponent", () => {
  let component: SecFinancialComponent;
  let fixture: ComponentFixture<SecFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecFinancialComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
