import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  ToastrService,
  UserProcessService,
} from "../../../services/services.index";
import { Process } from "../../../models/Process";
import { status, visaCategories } from "../../../config/config";
import { cleanData } from "../clean-data-forms";

@Component({
  selector: "ngx-form-work-permit",
  templateUrl: "./form-work-permit.component.html",
  styleUrls: ["./form-work-permit.component.scss"],
})
export class FormWorkPermitComponent implements OnInit {
  @Input("process") process: Process;

  id: string;
  submitted = false;
  cmStatus = status;
  url: string[];

  loading = false;
  forma: FormGroup;
  dataForm: any;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _porcessServices: UserProcessService,
    private _toastr: ToastrService
  ) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");
    this.forma = this._fb.group({
      _id: this._fb.control("new"),
      kind: this._fb.control(visaCategories.workpermit),
    });
  }

  ngOnInit() {
    this.loadForm();
  }

  get f() {
    return this.forma.controls;
  }

  loadForm() {
    this.loading = true;
    if (this.process && this.process.status !== status.active) {
      this._porcessServices
        .getUserForm(this.process._id)
        .pipe(
          map((form: any) => {
            if (!form) return {};
            delete form.createdAt;
            delete form.updatedAt;
            delete form.__v;

            const { client, ...rest } = form;
            delete client._id;

            return { ...client, ...rest };
          })
        )
        .subscribe((form: any) => {
          if (form) {
            this.f._id.setValue(form._id);
          }
          this.dataForm = form;
          this.loading = false;
        });
    } else {
      const client = { ...this.process.client };
      delete client._id;
      this.dataForm = { ...client };
      this.loading = false;
    }
  }

  save() {
    // this.loading = true;
    this.submitted = true;

    // if (this.forma.invalid) {
    //   this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
    //   this.loading = false;
    //   return;
    // }

    const completeData = cleanData(this.forma);

    console.log("informacion a enivar", { completeData });

    // if (this.f._id.value === "new") {
    //   this._porcessServices
    //     .setForm(this.process, completeData)
    //     .pipe(
    //       catchError(() => {
    //         this.loading = false;
    //         return of({});
    //       })
    //     )
    //     .subscribe((resp: any) => {
    //       if (resp.ok) {
    //         this._toastr.toastrGenericMessage(
    //           `Saved successfull`,
    //           "Form save",
    //           "success"
    //         );
    //         this.loading = false;
    //         this._router.navigate([this.url[0], this.url[1]]);
    //         return;
    //       }
    //     });
    // } else {
    //   this._porcessServices
    //     .updateForm(this.process, completeData)
    //     .pipe(
    //       catchError(() => {
    //         this.loading = false;
    //         return of({});
    //       })
    //     )
    //     .subscribe((resp: any) => {
    //       if (resp.ok) {
    //         this._toastr.toastrGenericMessage(
    //           `Saved successfull`,
    //           "Form save",
    //           "success"
    //         );
    //         // this._router.navigate([this.url[0], this.url[1]]);
    //         this.loading = false;
    //         return;
    //       }
    //     });
    // }
  }
}
