import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IBaseForm } from "../IBaseForm";
import { Observable } from "rxjs";
import { IOption, IOptionNumber } from "../../../models/Option";

@Component({
  selector: "ngx-sec-vs-information",
  templateUrl: "./sec-vs-information.component.html",
  styleUrls: ["./sec-vs-information.component.scss"],
})
export class SecVsInformationComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "visitorInformation";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optProvinces$: Observable<IOption[]>;
  optMaritalStatus$: Observable<IOption[]>;
  optPropousVisit$: Observable<IOption[]>;
  optYesNo$: Observable<IOption[]>;
  optStayCanada$: Observable<IOption[]>;

  constructor(
    private _parentControl: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  build() {
    this.parentForm = this._parentControl.control as FormGroup;

    this.childForm = this._fb.group({
      p_information_001: this._fb.control("", [Validators.required]),
      p_information_002: this._fb.control("", [Validators.required]),
      p_information_003: this._fb.control("", [Validators.required]),
      p_information_004: this._fb.control("", [Validators.required]),
      p_information_005: this._fb.control("", []),
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
    this.optProvinces$ = this._asf.getProvinces();
    this.optMaritalStatus$ = this._asf.getMaritalStatus();
    this.optPropousVisit$ = this._asf.getPropousVisit();
    this.optYesNo$ = this._asf.getYesNo();
    this.optStayCanada$ = this._asf.getStayCanada();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy() {
    this.parentForm.removeControl(this.nameSection);
  }

  get f() {
    return this.childForm.controls;
  }
}
