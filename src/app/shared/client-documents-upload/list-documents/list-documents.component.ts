import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../../models/Document';

@Component({
  selector: 'ngx-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  @Input('documents') document_list: Document[];

  constructor() { }

  ngOnInit() {
  }

}
