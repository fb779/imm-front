import { Component, OnInit, Input, TemplateRef } from "@angular/core";

import { FamilyService } from "../../services/services.index";
import { ProcessConsultantService } from "../process-consultant.service";
import { status } from "../../config/config";
import { CheckList } from "../../models/CheckList";
import { Process } from "../../models/Process";
import { Client } from "../../models/Client";
import { Observable } from "rxjs";

@Component({
  selector: "ngx-select-documents",
  templateUrl: "./select-documents.component.html",
  styleUrls: ["./select-documents.component.scss"],
})
export class SelectDocumentsComponent implements OnInit {
  @Input("process") process: Process;
  status = status;
  loading = false;

  type_visa: string;
  otherDocument: string = "";

  // TODO: obtener miembros de la familia
  listFamilyProcess$: Observable<Client[]>;
  // listFamilyProcess$: Observable<Client[]> = this._familyServices .listFamilyMembers$;

  // TODO: obtener checklist
  listCheckList$: Observable<CheckList[]>;

  // TODO: obtener documentos por cada miembro
  listDocumentClient$: Observable<Document[]>;

  list$: Observable<any> = this._pcServices.list$;

  constructor(private _pcServices: ProcessConsultantService) {
    // this._pcServices.list$.subscribe();
    // this.list$ = this._pcServices.list$;
  }

  ngOnInit() {
    this.type_visa = this.process.visa_category.name;

    this.saveCheck();
  }

  saveCheck() {
    this._pcServices.setTypeOfVisa(this.type_visa);
  }

  saveDocument() {
    this._pcServices.setProcess(this.process._id);
  }
}
