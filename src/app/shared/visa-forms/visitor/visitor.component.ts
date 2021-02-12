import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import {
  status,
  phoneNumberRegex,
  visaCategories,
} from "../../../config/config";
import { Title } from "../../../models/Titlel";
import { IOption, IOptionNumber } from "../../../models/Option";

import {
  AssessmentFormService,
  SidebarService,
  UserProcessService,
  ToastrService,
} from "../../../services/services.index";

@Component({
  selector: "ngx-visitor",
  templateUrl: "./visitor.component.html",
  styleUrls: ["./visitor.component.scss"],
})
export class VisitorComponent implements OnInit, OnDestroy {
  @Input("process") process: any;
  id: string;
  submitted = false;
  status = status;
  url: string[];

  forma: FormGroup;

  notifier$: Subject<any> = new Subject();

  optTitles$: Observable<Title[]>;
  optSex$: Observable<IOption[]>;
  optAccompanying$: Observable<IOptionNumber[]>;
  optYesNo$: Observable<IOption[]>;
  optCountries$: Observable<IOption[]>;
  optStatus$: Observable<IOption[]>;
  optProvinces$: Observable<IOption[]>;
  optMaritalStatus$: Observable<IOption[]>;
  optPropousVisit$: Observable<IOption[]>;
  optStayCanada$: Observable<IOption[]>;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    public _sidebarServices: SidebarService,
    private _porcessServices: UserProcessService,
    private _asf: AssessmentFormService,
    private _toastr: ToastrService
  ) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");

    this.loadOptions();
  }

  ngOnInit() {
    this.build();
    this.loadForm();
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  build() {
    this.forma = this._fb.group({
      _id: this._fb.control("nuevo"),
      kind: this._fb.control(visaCategories.expressentry),

      title: this._fb.control("", [Validators.required]),
      sex: this._fb.control("", [Validators.required]),
      first_name: this._fb.control("", [Validators.required]),
      last_name: this._fb.control("", [Validators.required]),
      email: this._fb.control("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
      telephone: this._fb.control("", [
        Validators.required,
        Validators.pattern(phoneNumberRegex),
      ]),
      country_citizenship: this._fb.control("", [Validators.required]),
      other_citizenship: this._fb.control("", []),
      country_residence: this._fb.control("", [Validators.required]),
      status_residence: this._fb.control("", [Validators.required]),
      status_residence_other: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      age: this._fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(99),
      ]),
      destiny: this._fb.control("", [Validators.required]),
      marital_status: this._fb.control("", [Validators.required]),
      purpose_visit: this._fb.control("", [Validators.required]),
      letter_invitation: this._fb.control("", [Validators.required]),
      stay_canada: this._fb.control("", [Validators.required]),
      funds: this._fb.control("", [Validators.required]),
      disease: this._fb.control("", [Validators.required]),
      criminal_act: this._fb.control("", [Validators.required]),
      refuse_canada: this._fb.control("", [Validators.required]),
      comments: this._fb.control("", []),
    });

    this.forma.controls["status_residence"].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((value: any) => {
        if (value == 5) {
          this.forma.get("status_residence_other").enable();
        } else {
          this.forma.get("status_residence_other").disable();
          this.forma.get("status_residence_other").reset();
        }
      });
  }

  loadOptions() {
    this.optTitles$ = this._asf.getTitles();
    this.optSex$ = this._asf.getSex();
    this.optAccompanying$ = this._asf.getAccompanying();
    this.optYesNo$ = this._asf.getYesNo();
    this.optCountries$ = this._asf.getCountries();
    this.optStatus$ = this._asf.getStatus();
    this.optProvinces$ = this._asf.getProvinces();
    this.optMaritalStatus$ = this._asf.getMaritalStatus();
    this.optPropousVisit$ = this._asf.getPropousVisit();
    this.optStayCanada$ = this._asf.getStayCanada();
  }

  loadForm() {
    if (this.process && this.process.status !== status.active) {
      this._porcessServices
        .getUserForm(this.process._id)
        .subscribe((form: any) => {
          if (!form) return;
          const { client, ...rest } = form;

          const loadDt = { ...client, ...rest };

          delete loadDt.birthday;
          delete loadDt.process;
          delete loadDt.client;
          delete loadDt.createdAt;
          delete loadDt.updatedAt;
          delete loadDt.__v;

          this.forma.setValue({ ...this.forma.value, ...loadDt });
        });
    } else {
      const client = { ...this.process.client };
      // console.log({ client, pro: this.process });
      delete client._id;
      delete client.user;
      this.forma.patchValue({ ...client });
    }
  }

  get f() {
    return this.forma.controls;
  }

  guardar() {
    this.submitted = true;

    if (this.forma.invalid) {
      this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      return;
    }

    if (this.f._id.value === "nuevo") {
      this._porcessServices
        .setForm(this.process, this.forma.value)
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
        .updateForm(this.process, this.forma.value)
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
