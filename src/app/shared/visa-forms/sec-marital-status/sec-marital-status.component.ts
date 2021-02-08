import { Component, forwardRef, Input, OnInit, OnDestroy } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { IBaseForm } from "../IBaseForm";

@Component({
  selector: "ngx-sec-marital-status",
  templateUrl: "./sec-marital-status.component.html",
  styleUrls: ["./sec-marital-status.component.scss"],
})
export class SecMaritalStatusComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "maritalStatus";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  notifier$: Subject<any> = new Subject();

  optMaritalStatus$: Observable<IOption[]>;
  optYesNo$: Observable<IOption[]>;

  constructor(
    private _fb: FormBuilder,
    private _parentControl: ControlContainer,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  build() {
    this.parentForm = this._parentControl.control as FormGroup;

    this.childForm = this._fb.group({
      p_marital_001: this._fb.control("", [Validators.required]),
      p_marital_002: this._fb.control("", [Validators.required]),
      p_marital_003: this._fb.control("", [Validators.required]),
    });

    this.childForm.controls["p_marital_001"].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((value: any) => {
        if (value == 2) {
          this.childForm.get("p_marital_002").enable();
          this.childForm.get("p_marital_003").enable();
        } else {
          this.childForm.get("p_marital_002").reset();
          this.childForm.get("p_marital_003").reset();

          this.childForm.get("p_marital_002").disable();
          this.childForm.get("p_marital_003").disable();
        }
      });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      const value = this.data[cur] || "";
      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({
      ...loadValues,
    });
  }

  loadOptions() {
    this.optMaritalStatus$ = this._asf.getMaritalStatus();
    this.optYesNo$ = this._asf.getYesNo();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  get f() {
    return this.childForm.controls;
  }
}
