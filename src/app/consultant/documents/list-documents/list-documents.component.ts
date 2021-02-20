import { Component, OnInit, Input } from "@angular/core";
import {
  DocumentService,
  ToastrService,
} from "../../../services/services.index";
import { Document } from "../../../models/Document";
import { Client } from "../../../models/Client";
import { Process } from "../../../models/Process";
import { documentStatus } from "../../../config/config";

@Component({
  selector: "ngx-list-documents",
  templateUrl: "./list-documents.component.html",
  styleUrls: ["./list-documents.component.scss"],
})
export class ListDocumentsComponent implements OnInit {
  @Input("process") process: Process;
  @Input("client") client: any;
  listDocuments: Document[] = [];
  documentStatus = documentStatus;
  comments = {};
  // comment = 'Mis comentarios por defecto';

  constructor(
    private _documentService: DocumentService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.loadDocuments();
    this.listDocuments = this.client.documents;
  }

  btnDownloadedStatus(item: Document) {
    return item.status === documentStatus.create;
  }

  btnAprobedRejectedStatus(item: Document) {
    return !(item.status !== documentStatus.create);
  }

  btnRejectedStatus(item: Document) {
    return item.status === documentStatus.create;
  }

  download(document_file: Document) {
    this._documentService.getDocumentFile(document_file);
  }

  approbe(document_file: Document) {
    this._documentService.setApproveDocument(document_file._id).subscribe(
      (res: any) => {
        if (res.ok) {
          this._toastr.toastrGenericMessage(
            `Save approve document`,
            "Documents"
          );
        }
      },
      (err) =>
        this._toastr.toastrGenericMessage(
          `Error save reject document`,
          "Documents",
          "danger"
        )
    );
  }

  reject(document_file: Document, comment: string) {
    if (!comment) {
      this._toastr.toastrGenericMessage(
        "The comment is require",
        "Documents",
        "warning"
      );
      return;
    }

    this._documentService
      .setRejectDocument(document_file._id, comment)
      .subscribe(
        (res: any) => {
          if (res.ok) {
            this.comments[document_file._id] = "";
            this._toastr.toastrGenericMessage(
              `Save reject document`,
              "Documents"
            );
          }
        },
        (err) =>
          this._toastr.toastrGenericMessage(
            `Error save reject document`,
            "Documents",
            "danger"
          )
      );
  }
}
