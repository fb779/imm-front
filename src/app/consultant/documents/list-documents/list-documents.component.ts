import { Component, OnInit, Input } from '@angular/core';
import { DocumentService, ToastrService } from '../../../services/services.index';
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
  comments = {};
  // comment = 'Mis comentarios por defecto';

  constructor(private _documentService: DocumentService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this._documentService.getDocumentsByClient(this.client._id).subscribe((response) => {
      // console.log('LLegada de los documentos', response);
      this.listDocuments = response;
      this.comments={};
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

  download(document_file: Document) {
    this._documentService.getDocumentFile(document_file);
  }

  approbe(document_file: Document){
    console.log('Aprobacion de documento', document_file);

    this._documentService.setApproveDocument(document_file._id).subscribe(
      ( response ) => {this._toastr.toastrGenericMessage(`Save approve document`, 'Documents'); console.log(response)},
      (err ) => this._toastr.toastrGenericMessage(`Error save reject document`, 'Documents', 'danger')
    );

  }

  reject(document_file: Document, comment: string){
    if (!comment){
      alert('The comment is required');
      return;
    }
    console.log('Rechazo de documento', document_file);
    console.log('Comentario de Rechazo de documento', comment);

    this._documentService.setRejectDocument(document_file._id, comment).subscribe(
      ( response ) => {this._toastr.toastrGenericMessage(`Save reject document`, 'Documents'); console.log(response)},
      (err ) => this._toastr.toastrGenericMessage(`Error save reject document`, 'Documents', 'danger')
    )
  }
}
