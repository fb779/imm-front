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
import { Document } from '../../models/Document';

@Component({
  selector: "ngx-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  @Input("process") process: Process;
  @Input("client") client: Client;
  status = status;
  loading = false;

  listFamiliMembers$: Observable<Client[]> = this._familyServices.listFamilyMembers$;
  documentList: Document[] = [];
  constructor(
    private _consultatnService: ConsultantService,
    private _familyServices: FamilyService,
    private _documentService: DocumentService
  ) { }

  ngOnInit() {
    // console.log('Clientes en documentos', this.client);

  }


}
