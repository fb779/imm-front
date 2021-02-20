import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  ChecklistService,
  ToastrService,
} from "../../../services/services.index";
import { Process } from "../../../models/Process";

@Component({
  selector: "ngx-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"],
})
export class ChecklistComponent implements OnInit {
  @Input("process") process: Process;
  @Input("client") client: any;
  @Input("type_visa") type_visa: string;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();

  checkList: any = [];

  documentSelected = [];
  documentsLoads = [];

  constructor(
    private _checklistServices: ChecklistService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.checkList = this.client.checkList;
  }

  toggle(e: boolean) {
    this.documentSelected = this.checkList
      .filter((item) => {
        return item.required;
      })
      .map((el) => {
        return el._id;
      });
  }

  saveList() {
    if (this.documentSelected.length > 0) {
      this._checklistServices
        .saveDocumentsByClient(
          this.process._id,
          this.client._id,
          this.documentSelected
        )
        .subscribe(
          (response) => {
            this.save.emit(true);
            this._toastr.toastrGenericMessage(
              `Save document successfull`,
              "Check list"
            );
          },
          () =>
            this._toastr.toastrGenericMessage(
              `Error to save document`,
              "Check list",
              "danger"
            )
        );
    } else {
      this._toastr.toastrGenericMessage(
        `Select document to saved`,
        "Check list",
        "warning"
      );
    }
  }
}
