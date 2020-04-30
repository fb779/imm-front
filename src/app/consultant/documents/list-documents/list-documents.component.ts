import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FamilyService } from '../../../services/services.index';
import { Document } from '../../../models/Document';
import { Client } from '../../../models/Client';
import { Process } from '../../../models/Process';

@Component({
  selector: 'ngx-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  @Input('process') process: Process;
  @Input('client') client: Client;

  listDocuments$: Observable<Document[]> = of([
    {
      _id: "1",
      checklist: "89sd89ds89uds98d8su9",
      client: "ds98sd89sd89sd89sd89ds",
      name: "passport",
      directory: "/path/save/document",
      status: "",
    },
    {
      _id: "2",
      checklist: "89sd89ds89udssd78ds78ds78",
      client: "ds98sd89sd89sd89sd89ds",
      name: "letter",
      directory: "/path/save/document",
      status: "",
    }
  ]);

  constructor(private _familyServices: FamilyService) { }

  ngOnInit() {
  }

  download() {
    // this._familyServices.getDocument()
  }
}
