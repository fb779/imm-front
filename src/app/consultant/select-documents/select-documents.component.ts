import { Component, OnInit, Input, TemplateRef } from "@angular/core";

import { FamilyService } from "../../services/services.index";
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

  listFamiliMembers$: Observable<Client[]> = this._familyServices
    .listFamilyMembers$;

  constructor(private _familyServices: FamilyService) {}

  ngOnInit() {
    // this.loading = true;
    this.type_visa = this.process.visa_category.name;
  }

  loadProcess() {}

  saveList(list) {}
}
