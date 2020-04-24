import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsultantService } from '../../../services/services.index';
import { CheckList } from '../../../models/CheckList';

@Component({
  selector: 'ngx-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input('type_visa') type_visa;
  @Input('client') client;
  @Output() save = new EventEmitter();

  listItems = [];
  documentRequired = [];

  constructor(private _consultatnService: ConsultantService) { }

  ngOnInit() {
    this._consultatnService.getDocumentsOfConsultant(this.type_visa)
      .subscribe((data: CheckList[]) => {
        this.listItems = data;
        // this.loading = false;
      });
  }

  toggle(e: boolean) {
    this.documentRequired = this.listItems
      .filter((item) => {
        return item.required;
      })
      .map((el) => {
        return {
          _id: el._id,
          name: el.name,
          status: el.required,
        };
      });
  }

  saveList(){
    if (this.documentRequired.length > 0){
      this.save.emit({client: this.client, documents: this.documentRequired});
      // console.log({client: this.client, documents: this.documentRequired});
    }
  }
}
