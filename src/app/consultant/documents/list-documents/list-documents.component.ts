import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FamilyService, DocumentService } from '../../../services/services.index';
import { Document } from '../../../models/Document';
import { Client } from '../../../models/Client';
import { Process } from '../../../models/Process';
import { documentStatus } from '../../../config/config';

@Component({
  selector: 'ngx-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  @Input('process') process: Process;
  @Input('client') client: Client;
  listDocuments: Document[];
  documentStatus = documentStatus;

  constructor(private _documentService: DocumentService) { }

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this._documentService.getDocumentsByClient(this.client._id).subscribe((response) => {
      // console.log('LLegada de los documentos', response);
      this.listDocuments = response;
    });
  }

  btnDownloadedStatus(item: Document) {
    return item.status === documentStatus.create;
  }

  btnAprobedRejectedStatus(item: Document) {
    return !(item.status !== documentStatus.create);
  }

  // btnRejectedStatus(item: Document) {
  //   return item.status === documentStatus.create;
  // }

  download() {
    // this._familyServices.getDocument()
  }
}
