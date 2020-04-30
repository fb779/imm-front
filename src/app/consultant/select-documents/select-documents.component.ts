import { Component, OnInit, Input } from "@angular/core";
import { Document } from "../../models/Document";
import {
  ConsultantService,
  FamilyService,
} from "../../services/services.index";
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

  listFamiliMembers$: Observable<Client[]> = this._familyServices.listFamilyMembers$;

  constructor(
    private _consultatnService: ConsultantService,
    private _familyServices: FamilyService
  ) { }

  ngOnInit() {
    // this.loading = true;
    this.type_visa = this.process.visa_category.name;
    // this._consultatnService
    //   .getDocumentsOfConsultant(this.type_visa)
    //   .subscribe((data: CheckList[]) => {
    //     this.listOfDocuments = data;
    //     this.loading = false;
    //   });
  }

  loadProcess() {
    this._familyServices.chageProcess(this.process);
  }


  // addOther() {
  //   // console.log(this.otherDocument);

  //   if (!this.otherDocument) {
  //     console.log("the field is required");
  //     return;
  //   }

  //   if (!this.validUnique(this.otherDocument, this.otherDocuments)) {
  //     console.log("the document already exist");
  //     return;
  //   }

  //   // let dt = new Object({"name": this.otherDocument.trim()});
  //   // this.otherDocuments.push(dt);

  //   this.otherDocuments.push({ name: this.otherDocument.trim() });

  //   this.otherDocument = "";
  // }

  // removeOther(other) {
  //   this.otherDocuments = this.otherDocuments.filter((el) => {
  //     return !(el.name === other.name);
  //   });
  // }

  saveList(list) {
    console.log('recibida la lista de documentos', list);
  }

  // private validUnique(document, listDocuments) {
  //   let list = listDocuments.filter((el) => {
  //     return el.name == document;
  //   });

  //   return list.length > 0 ? false : true;
  // }
}
