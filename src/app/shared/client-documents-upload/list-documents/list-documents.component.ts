import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../../models/Document';

import { documentStatus } from '../../../config/config';

@Component({
  selector: 'ngx-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  status_map = {
    // basic: "basic",
    // primary: "primary",
    // warning: "warning",
    CREATE: "info",
    UPLOADED: "info",
    APPROVED: "success",
    REJECTED: "danger",
  };
  comment: string;

  @Input('documents') document_list: Document[];

  constructor() { }

  ngOnInit() {
  }

  getStatusClass(status:string){
    return this.status_map[status];
  }

  isVisibleComment(status: string){
      return status === documentStatus.rejected;
  }

  getComment(document){
    let last_comment = document.comments.pop()
    return last_comment.comment;
  }
}
