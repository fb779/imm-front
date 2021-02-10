import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { Subject, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { AssessmentFormService } from "../../../services/assessment-form/assessment-form.service";
import { IBaseForm } from "../IBaseForm";
import { IOption } from "../../../models/Option";
import { yearValid } from "../../../config/config";

import * as moment from "moment";

@Component({
  selector: "ngx-sec-wp-information",
  templateUrl: "./sec-wp-information.component.html",
  styleUrls: ["./sec-wp-information.component.scss"],
})
export class SecWpInformationComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "information";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  notifier$: Subject<void> = new Subject<void>();

  minYear = moment().subtract(90, "years").get("year");
  maxYear = moment().get("year");

  optYesNo$: Observable<IOption[]>;

  constructor(
    private _parentControl: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  build(): void {
    this.parentForm = this._parentControl.control as FormGroup;

    this.childForm = this._fb.group({
      p_information_001: this._fb.control("", [Validators.required]),
      p_information_002: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      p_information_003: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
        this.isYearOk(this.minYear, this.maxYear),
      ]),
      p_information_004: this._fb.control("", [Validators.required]),
      p_information_005: this._fb.control("", [Validators.required]),
    });

    this.childForm
      .get("p_information_001")
      .valueChanges.pipe(takeUntil(this.notifier$))
      .subscribe((value) => {
        if (value == 1) {
          this.childForm.get("p_information_002").enable();
          this.childForm.get("p_information_003").enable();
        } else {
          this.childForm.get("p_information_002").reset();
          this.childForm.get("p_information_003").reset();
          this.childForm.get("p_information_002").disable();
          this.childForm.get("p_information_003").disable();
        }
      });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation(): void {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";
      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({
      ...loadValues,
    });
  }

  loadOptions(): void {
    this.optYesNo$ = this._asf.getYesNo();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
    this.parentForm.removeControl(this.nameSection);
  }

  get f() {
    return this.childForm.controls;
  }

  /**
   * Validaciones
   */
  isYearOk(minYear, maxYear, pattern = yearValid): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const val = String(control.value);

      if (!val) return null;

      return !pattern.test(val) || val < minYear || val > maxYear
        ? { isYearOk: { actual: val, minYear, maxYear } }
        : null;
    };
  }
}
