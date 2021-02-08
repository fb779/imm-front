import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { IBaseForm } from "../IBaseForm";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "ngx-sec-visit",
  templateUrl: "./sec-visit.component.html",
  styleUrls: ["./sec-visit.component.scss"],
})
export class SecVisitComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "visitAdmisibility";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optProvinces$: Observable<IOption[]>;
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
      p_visit_001: this._fb.control("", [Validators.required]),
      p_visit_002: this._fb.control("", [Validators.required]),
      p_visit_003: this._fb.control("", [Validators.required]),
      p_visit_004: this._fb.control("", [Validators.required]),
      p_visit_005: this._fb.control("", [Validators.required]),
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
    this.optYesNo$ = this._asf.getYesNo();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
