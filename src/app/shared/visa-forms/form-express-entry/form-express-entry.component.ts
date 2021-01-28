import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { Process } from "../../../models/Process";
import { status, visaCategories } from "../../../config/config";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  ToastrService,
  UserProcessService,
} from "../../../services/services.index";

// TODO: put and use the NOC work list

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

  forma: FormGroup;

  // loadData$ = () => this._porcessServices.getUserForm(this.process._id);
  loadData = {};
  // loadData = {
  //   title: "mr",
  //   sex: "1",
  //   first_name: "nelson",
  //   last_name: "forero",
  //   email: "nelson@dominio.com",
  //   telephone: "1231231231",
  //   country_citizenship: "CO",
  //   other_citizenship: "",
  //   country_residence: "CO",
  //   status_residence: "1",
  //   status_residence_other: "",
  //   age: "34",

  //   p_marital_001: "2",
  //   p_marital_002: "2",
  //   p_marital_003: "1",

  //   p_information_001: "1",
  //   p_information_002: "2",

  //   p_visit_001: "2",
  //   p_visit_002: "2",
  //   p_visit_003: "2",
  //   p_visit_004: "2",
  //   p_visit_005: "2",

  //   p_education_001: "2",
  //   p_education_list: [
  //     {
  //       level: "6",
  //       study: "SE",
  //       institution: "udec",
  //       duration: "6",
  //       country: "CA",
  //     },
  //     {
  //       level: "7",
  //       study: "SA",
  //       institution: "JAVERIANA",
  //       duration: "1",
  //       country: "CA",
  //     },
  //     {
  //       level: "7",
  //       study: "SA",
  //       institution: "JAVERIANA",
  //       duration: "1",
  //       country: "CA",
  //     },
  //   ],
  //   p_education_spouse_001: "2",
  //   p_education_spouse_list: [
  //     {
  //       level: "6",
  //       study: "SE",
  //       institution: "udec",
  //       duration: "6",
  //       country: "CA",
  //     },
  //     {
  //       level: "7",
  //       study: "SA",
  //       institution: "JAVERIANA",
  //       duration: "1",
  //       country: "CA",
  //     },
  //     {
  //       level: "7",
  //       study: "SA",
  //       institution: "JAVERIANA",
  //       duration: "1",
  //       country: "CA",
  //     },
  //   ],
  //   p_language_001: "1",
  //   p_language_en_001: "IELTS",
  //   p_language_en_002: "A",
  //   p_language_en_003: "2020-01-07T05:00:00.000Z",
  //   p_language_en_004: "8",
  //   p_language_en_005: "6",
  //   p_language_en_006: "8",
  //   p_language_en_007: "7",
  //   p_language_fr_001: "",
  //   p_language_spouse_001: "2",
  //   p_workdetail_001: "1",
  //   p_workdetail_002: "1",
  //   p_workdetail_003: "1",
  //   p_workdetail_004: "0012",
  //   p_workdetail_list: [
  //     {
  //       title: "ss",
  //       duties: "ss",
  //       company: "ss",
  //       duration: 6,
  //       hoursPerWeek: 40,
  //       country: "CA",
  //     },
  //   ],
  //   p_workdetail_spouse_list: [],
  //   p_family_001: "1",
  //   p_family_002: "1",
  //   p_family_003: "3",
  //   p_family_004: "1,3,4",
  //   p_finantial_001: "3",
  // };

  constructor(
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
    // if (this.process && this.process.status !== status.active) {
    this._porcessServices
      .getUserForm(this.process._id)
      .subscribe((form: any) => {
        if (!form) return;
        const { client, ...rest } = form;

        delete client._id;

        const loadDt = { personalInformation: { ...client }, ...rest };

        // delete loadDt.birthday;
        // delete loadDt.process;
        delete loadDt.client;
        delete loadDt.createdAt;
        delete loadDt.updatedAt;
        delete loadDt.__v;

        this.loadData = loadDt;

        console.log("valores para cargar", { forma: this.forma.value, loadDt });

        this.forma.setValue({ ...this.forma.value, ...loadDt });
      });
    // }
  }

  save() {
    this.submitted = true;

    if (this.forma.invalid) {
      // this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      return;
    }

    const valores = Object.keys(this.forma.value).reduce((acc, cur) => {
      const newCurVal = this.forma.value[cur];

      if (typeof newCurVal === "object") {
        acc = { ...acc, ...newCurVal };
      } else {
        acc = { ...acc, [cur]: newCurVal };
      }

      return acc;
    }, {});
    console.log("Valores del form", { form: this.forma.value, valores });

    if (this.f._id.value === "new") {
      this._porcessServices
        .setForm(this.process, valores)
        .subscribe((resp: any) => {
          if (resp.ok) {
            this._toastr.toastrGenericMessage(
              `Saved successfull`,
              "Form save",
              "success"
            );
            this._router.navigate([this.url[0], this.url[1]]);
            return;
          }
        });
    } else {
      this._porcessServices
        .updateForm(this.process, valores)
        .subscribe((resp: any) => {
          if (resp.ok) {
            this._toastr.toastrGenericMessage(
              `Saved successfull`,
              "Form save",
              "success"
            );
            // this._router.navigate([this.url[0], this.url[1]]);
            return;
          }
        });
    }
  }
}
