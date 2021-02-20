import { Component, OnInit, Input, Output } from "@angular/core";
import {
  FamilyService,
  ConsultantService,
  DocumentService,
} from "../../services/services.index";
import { Observable } from "rxjs";
import { Client } from "../../models/Client";
import { Process } from "../../models/Process";
import { status } from "../../config/config";
import { Document } from "../../models/Document";

@Component({
  selector: "ngx-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  @Input("process") process: Process;
  status = status;
  loading = false;

  // list$: Observable<any> = this._documentService.listClientProcess$;
  // listDocuments$: Observable<any> = this._documentService.listDocumentsClients$;
  list$: Observable<any> = this._documentService.list$;

  constructor(private _documentService: DocumentService) {}

  ngOnInit() {
    this._documentService.setProcess(this.process._id);
  }
}
