import { Component, Input, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { Process } from "../../../models/Process";
import { status, visaCategories } from "../../../config/config";
import {
  ToastrService,
  UserProcessService,
} from "../../../services/services.index";

import * as _ from "underscore";
import { map } from "rxjs/operators";

@Component({
  selector: "ngx-form-express-entry",
  templateUrl: "./form-express-entry.component.html",
  styleUrls: ["./form-express-entry.component.scss"],
})
export class FormExpressEntryComponent implements OnInit {
  @Input("process") process: Process;

  id: string;
  submitted = false;
  cmStatus = status;
  url: string[];

  loading = false;
  forma: FormGroup;
  dataForm: any;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _router: Router,
    private _fb: FormBuilder,
    private _porcessServices: UserProcessService,
    private _toastr: ToastrService
  ) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");
    this.forma = this._fb.group({
      _id: this._fb.control("new"),
      kind: this._fb.control(visaCategories.expressentry),
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
      this.loading = false;
      this.dataForm = {};
    }
  }

  save() {
    this.loading = true;
    this.submitted = true;

    if (this.forma.invalid) {
      this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      return;
    }

    const valores = Object.keys(this.forma.value).reduce((acc, cur) => {
      const newCurVal = this.forma.value[cur] || "";

      if (typeof newCurVal === "object") {
        acc = { ...acc, ...newCurVal };
      } else {
        acc = { ...acc, [cur]: newCurVal };
      }

      return acc;
    }, {});

    const fields = Object.keys(this.f).reduce((acc, cur) => {
      const curControl = this.f[cur];

      if (curControl.hasOwnProperty("controls")) {
        const ctlValues = Object.keys(curControl["controls"]).reduce(
          (ac, el) =>
            el.includes("list") ? { ...ac, [el]: [] } : { ...ac, [el]: "" },
          {}
        );
        acc = { ...acc, ...ctlValues };
      } else {
        acc = { ...acc, [cur]: curControl.value };
      }

      return acc;
    }, {});

    const completeData = { ...fields, ...valores };

    if (this.f._id.value === "new") {
      this._porcessServices
        .setForm(this.process, completeData)
        .subscribe((resp: any) => {
          if (resp.ok) {
            this._toastr.toastrGenericMessage(
              `Saved successfull`,
              "Form save",
              "success"
            );
            this.loading = false;
            this._router.navigate([this.url[0], this.url[1]]);
            return;
          }
        });
    } else {
      this._porcessServices
        .updateForm(this.process, completeData)
        .subscribe((resp: any) => {
          if (resp.ok) {
            this._toastr.toastrGenericMessage(
              `Saved successfull`,
              "Form save",
              "success"
            );
            // this._router.navigate([this.url[0], this.url[1]]);
            this.loading = false;
            return;
          }
        });
    }
  }
}
