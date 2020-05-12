import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../models/Client';
import { DocumentService } from '../../services/services.index';
import { Document } from '../../models/Document';

@Component({
  selector: 'ngx-client-documents-upload',
  templateUrl: './client-documents-upload.component.html',
  styleUrls: ['./client-documents-upload.component.scss']
})
export class ClientDocumentsUploadComponent implements OnInit {

  @Input('client') client: Client;
  spinner: Boolean = false;
  documents_list: Document[] = [];

  constructor(private _documentService: DocumentService) { }

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this.spinner = true;
    this._documentService.getDocumentsByClient(this.client._id).subscribe((response) => {
      this.documents_list = response;
      this.spinner = false;
    });

  }

}
