import { Component, OnInit, Input } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";

import { DocumentService } from "../../services/services.index";

import { Document } from "../../models/Document";
import { Client } from "../../models/Client";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "ngx-client-documents-upload",
  templateUrl: "./client-documents-upload.component.html",
  styleUrls: ["./client-documents-upload.component.scss"],
})
export class ClientDocumentsUploadComponent implements OnInit {
  private clientIdBS: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private clientId$ = this.clientIdBS.asObservable();

  @Input("client") client: Client;

  listDocuments$: Observable<Document[]>;

  constructor(private _documentService: DocumentService) {}

  ngOnInit() {
    this.setClientId();

    this.listDocuments$ = this.clientId$.pipe(
      switchMap((clientId) =>
        this._documentService.getDocumentsByClient(clientId)
      )
    );
  }

  setClientId() {
    this.clientIdBS.next(this.client._id);
  }

  confirmUpload() {
    this.setClientId();
  }
}
