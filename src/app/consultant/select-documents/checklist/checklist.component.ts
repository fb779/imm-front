import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsultantService, ChecklistService } from '../../../services/services.index';
import { CheckList } from '../../../models/CheckList';
import { Process } from '../../../models/Process';
import { Client } from '../../../models/Client';

@Component({
  selector: 'ngx-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input('process') process: Process;
  @Input('client') client: Client;
  @Input('type_visa') type_visa;

  listItems = [];
  documentSelected = [];
  documentsLoads = [];

  constructor(private _consultatnService: ConsultantService, private _checklistServices: ChecklistService) { }

  ngOnInit() {
    this._consultatnService.getDocumentsOfConsultant(this.type_visa)
      .subscribe((data: CheckList[]) => {
        this.listItems = data;
        // this.loading = false;
        this.loadDocuments();
      });
  }

  loadDocuments() {
    this._checklistServices.getDocumentsByProcessClient(this.process._id, this.client._id).subscribe((response) => {
      this.documentsLoads = response;
      this.adjustItemList();
    });
  }

  adjustItemList() {
    this.listItems = this.listItems.map(el => {
      if (this.documentsLoads.indexOf(el._id.toString()) > -1) {
        el.required = true
      }
      return el;
    });
  }

  toggle(e: boolean) {
    this.documentSelected = this.listItems
      .filter((item) => {
        return item.required;
      })
      .map((el) => {
        return el._id
      });
  }

  saveList() {
    if (this.documentSelected.length > 0) {
      this._checklistServices.saveDocumentsByClient(this.process._id, this.client._id, this.documentSelected).subscribe((response) => {
        this.loadDocuments();
      });
    }
  }
}
