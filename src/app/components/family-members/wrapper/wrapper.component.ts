import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { Process } from "../../../models/Process";
import { Observable } from "rxjs";

import { FamilyService, ToastrService } from "../../../services/services.index";

@Component({
  selector: "ngx-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"],
})
export class WrapperComponent implements OnInit {
  @Input("process") process: Process;
  listFamily$: Observable<any> = this._familyService.listFamilyUser$;

  constructor(
    protected ref: NbDialogRef<WrapperComponent>,
    private _familyService: FamilyService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log("Info cargada", { proc: this.process });
  }

  saveForm(evClient) {
    console.log("wrapper", { evClient });

    const { _id: id } = evClient;

    if (!id) {
      this._familyService.newFamilyMember(this.process, evClient).subscribe(
        (res) => {
          this._toastr.toastrGenericMessage(
            "Save new family member",
            "Family members",
            "success"
          );
          this._familyService.loadEditClient(null);
        },
        (err) =>
          this._toastr.toastrGenericMessage(
            "Error to save new family member",
            "Family members",
            "danger"
          )
      );
    }

    //
  }

  updateClient(editClient) {
    this._familyService.loadEditClient(editClient);
  }
}
