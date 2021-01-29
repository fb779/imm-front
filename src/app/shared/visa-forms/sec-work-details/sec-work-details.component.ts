import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IBaseForm } from "../IBaseForm";
import { IOption } from "../../../models/Option";
import { FormArray } from "@angular/forms";

@Component({
  selector: "ngx-sec-work-details",
  templateUrl: "./sec-work-details.component.html",
  styleUrls: ["./sec-work-details.component.scss"],
})
export class SecWorkDetailsComponent implements IBaseForm, OnInit {
  constructor(
    private _controlContainer: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "workDetail";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  minItems = 1;
  maxItems = 10;

  optYesNo: IOption[] = [];
  optCountries: IOption[] = [];
  optNocList: IOption[] = [];

  build(): void {
    this.parentForm = this._controlContainer.control as FormGroup;

    this.childForm = this._fb.group({
      p_workdetail_001: this._fb.control("", [Validators.required]),
      p_workdetail_002: this._fb.control("", [Validators.required]),
      p_workdetail_003: this._fb.control("", [Validators.required]),
      p_workdetail_004: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      p_workdetail_list: this._fb.array([this.newWorkHistory()]),
      p_workdetail_spouse_list: this._fb.array([]),
    });

    this.childForm.get("p_workdetail_003").valueChanges.subscribe((value) => {
      if (value == 1) {
        this.childForm.get("p_workdetail_004").enable();
      } else {
        this.childForm.get("p_workdetail_004").reset();
        this.childForm.get("p_workdetail_004").disable();
      }
    });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation(): void {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";

      if (
        !this.data[cur] &&
        (cur === "p_workdetail_list" || cur === "p_workdetail_spouse_list")
      ) {
        value = [];
      }
      return { ...acc, [cur]: value };
    }, {});

    this.data.p_workdetail_list &&
      this.data.p_workdetail_list.forEach((el, i) => {
        if (i > 0) this.addWorDetail();
      });

    this.isMarried &&
      this.data.p_workdetail_spouse_list &&
      this.data.p_workdetail_spouse_list.forEach((el, i) => {
        this.addWorDetailSpouse();
      });

    this.childForm.patchValue({ ...loadValues });
  }

  loadOptions(): void {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });

    this._asf.getNocList().subscribe((data) => {
      this.optNocList = data;
    });
  }

  newWorkHistory() {
    return this._fb.group({
      title: ["", [Validators.required]],
      duties: ["", [Validators.required]],
      company: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      hoursPerWeek: ["", [Validators.required]],
      country: ["CA", [Validators.required]],
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

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

  /**
   * principal aplicant work detail
   */
  get fWorkList() {
    return this.f.p_workdetail_list as FormArray;
  }

  addWorDetail() {
    if (this.fWorkList.length === this.maxItems) return;
    this.fWorkList.push(this.newWorkHistory());
  }

  removeWorDetail(item) {
    if (this.fWorkList.length > this.minItems) {
      this.fWorkList.removeAt(item);
    }
  }

  /**
   * spouse work detail
   */

  get fWorkSpList() {
    return this.f.p_workdetail_spouse_list as FormArray;
  }

  addWorDetailSpouse() {
    if (this.fWorkSpList.length === this.maxItems) return;
    this.fWorkSpList.push(this.newWorkHistory());
  }

  removeWorDetailSpouse(item) {
    this.fWorkSpList.removeAt(item);
  }
}
