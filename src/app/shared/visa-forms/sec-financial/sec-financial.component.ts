import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  ControlContainer,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { IBaseForm } from "../IBaseForm";
import { IOption } from "../../../models/Option";
import { Observable } from "rxjs";

@Component({
  selector: "ngx-sec-financial",
  templateUrl: "./sec-financial.component.html",
  styleUrls: ["./sec-financial.component.scss"],
})
export class SecFinancialComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "financial";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};
  @Input("require") require: boolean = true;

  // optFinantialFounds: IOption[] = [];
  optFinantialFounds$: Observable<IOption[]>;

  constructor(
    private _controlContainer: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  build() {
    this.parentForm = this._controlContainer.control as FormGroup;

    this.childForm = this._fb.group({
      p_financial_001: this._fb.control("", [Validators.required]),
    });

    if (!this.require) {
      this.childForm.get("p_financial_001").clearValidators();
      this.childForm.get("p_financial_001").updateValueAndValidity();
    }

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
    this.optFinantialFounds$ = this._asf.getFinancial();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
