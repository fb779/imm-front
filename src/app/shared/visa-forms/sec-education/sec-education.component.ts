import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { FormArray } from "@angular/forms";

@Component({
  selector: "ngx-sec-education",
  templateUrl: "./sec-education.component.html",
  styleUrls: ["./sec-education.component.scss"],
})
export class SecEducationComponent implements OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "education";
  @Input("data") data: any = {};
  @Input("submitted") submitted: Boolean = false;

  optLevelEducation: IOption[] = [];
  optYearsEducation: IOption[] = [];
  optCountries: IOption[] = [];

  constructor(
    private _fb: FormBuilder,
    private _parentControl: ControlContainer,
    private _asf: AssessmentFormService
  ) {
    this.LoadOptions();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  build() {
    this.parentForm = this._parentControl.control as FormGroup;

    this.childForm = this._fb.group({
      p_education_001: this._fb.control("", []),
      p_education_list: this._fb.array([this.initFormEduList()]),
    });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.childForm.value).reduce((acc, cur) => {
      return this.data[cur] ? { ...acc, [cur]: this.data[cur] } : acc;
    }, {});

    this.childForm.setValue({
      ...this.childForm.value,
      ...loadValues,
    });
  }

  LoadOptions() {
    this._asf.getLevelEducation().subscribe((data) => {
      this.optLevelEducation = data;
    });

    this._asf.getYearsEducation().subscribe((data) => {
      this.optYearsEducation = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });
  }

  initFormEduList() {
    return this._fb.group({
      level: ["", [Validators.required]],
      study: ["", [Validators.required]],
      institution: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      country: ["CA", [Validators.required]],
    });
  }

  get f() {
    return this.childForm.controls;
  }

  get fEduList() {
    return this.f.p_education_list as FormArray;
  }

  add() {
    if (this.fEduList.length === 10) return;

    this.fEduList.push(this.initFormEduList());
  }
  remove(ix: number) {
    if (this.fEduList.length > 1) {
      this.fEduList.removeAt(ix);
    }
  }
}
