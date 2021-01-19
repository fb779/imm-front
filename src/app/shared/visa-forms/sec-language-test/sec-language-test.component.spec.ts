import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecLanguageTestComponent } from './sec-language-test.component';

describe('SecLanguageTestComponent', () => {
  let component: SecLanguageTestComponent;
  let fixture: ComponentFixture<SecLanguageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecLanguageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecLanguageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
