import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { IBaseForm } from "../IBaseForm";

@Component({
  selector: "ngx-sec-education",
  templateUrl: "./sec-education.component.html",
  styleUrls: ["./sec-education.component.scss"],
})
export class SecEducationComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "education";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optYesNo: IOption[] = [];
  optLevelEducation: IOption[] = [];
  optYearsEducation: IOption[] = [];
  optCountries: IOption[] = [];

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
      p_education_001: this._fb.control("", [Validators.required]),
      p_education_list: this._fb.array([this.newEducationRecord()]),
      p_education_spouse_001: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      p_education_spouse_list: this._fb.array([]),
    });

    this.pf.maritalStatus &&
      this.pf.maritalStatus
        .get("p_marital_001")
        .valueChanges.subscribe((value) => {
          if (value == 2) {
            this.childForm.get("p_education_spouse_001").enable();
          } else {
            this.childForm.get("p_education_spouse_001").reset();
            this.childForm.get("p_education_spouse_001").disable();
            this.fEduSpList.clear();
          }
        });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";

      if (
        !this.data[cur] &&
        (cur === "p_education_list" || cur === "p_education_spouse_list")
      ) {
        value = [];
      }

      return { ...acc, [cur]: value };
    }, {});

    this.data.p_education_list &&
      this.data.p_education_list.forEach((el, i) => {
        if (i > 0) this.addEducation();
      });

    this.data.p_education_spouse_list &&
      this.data.p_education_spouse_list.forEach(() => {
        this.addEducationSpouse();
      });

    this.childForm.patchValue({
      ...loadValues,
    });
  }

  loadOptions() {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });

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

  newEducationRecord() {
    return this._fb.group({
      level: ["", [Validators.required]],
      study: ["", [Validators.required]],
      institution: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      country: ["CA", [Validators.required]],
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy() {}

  get pf() {
    return this.parentForm.controls;
  }

  get isMarried() {
    return this.pf.maritalStatus &&
      this.pf.maritalStatus.get("p_marital_001").value == 2
      ? true
      : false;
  }

  get f() {
    return this.childForm.controls;
  }

  get fEduList() {
    return this.f.p_education_list as FormArray;
  }

  addEducation() {
    if (this.fEduList.length === 10) return;

    this.fEduList.push(this.newEducationRecord());
  }

  removeEducation(ix: number) {
    if (this.fEduList.length > 1) {
      this.fEduList.removeAt(ix);
    }
  }

  get fEduSpList() {
    return this.f.p_education_spouse_list as FormArray;
  }

  addEducationSpouse() {
    if (this.fEduSpList.length === 10) return;

    this.fEduSpList.push(this.newEducationRecord());
  }

  removeEducationSpouse(ix: number) {
    this.fEduSpList.removeAt(ix);
  }
}
