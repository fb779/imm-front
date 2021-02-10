import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Subject, Observable } from "rxjs";
import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/assessment-form/assessment-form.service";
import { IOption } from "../../../models/Option";

@Component({
  selector: "ngx-sec-family-info",
  templateUrl: "./sec-family-info.component.html",
  styleUrls: ["./sec-family-info.component.scss"],
})
export class SecFamilyInfoComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "familyInformation";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optYesNo$: Observable<IOption[]>;

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
      p_familyinfo_001: this._fb.control("", [Validators.required]),
      p_familyinfo_002: this._fb.control("", [Validators.required]),
      p_familyinfo_003: this._fb.control("", [Validators.required]),
      p_familyinfo_004: this._fb.control("", [Validators.required]),
      p_familyinfo_005: this._fb.control("", []),
    });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";
      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({ ...loadValues });
  }

  loadOptions() {
    this.optYesNo$ = this._asf.getYesNo();
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
