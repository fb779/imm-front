import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDocumentsUploadComponent } from './client-documents-upload.component';

describe('ClientDocumentsUploadComponent', () => {
  let component: ClientDocumentsUploadComponent;
  let fixture: ComponentFixture<ClientDocumentsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDocumentsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDocumentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
