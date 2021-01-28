import { Component, forwardRef, Input, OnInit, OnDestroy } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
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

  optMaritalStatus: IOption[] = [];
  optYesNo: IOption[] = [];

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

    this.childForm.controls["p_marital_001"].valueChanges.subscribe(
      (value: any) => {
        if (value == 2) {
          this.childForm.get("p_marital_002").enable();
          this.childForm.get("p_marital_003").enable();
        } else {
          this.childForm.get("p_marital_002").reset();
          this.childForm.get("p_marital_003").reset();

          this.childForm.get("p_marital_002").disable();
          this.childForm.get("p_marital_003").disable();
        }
      }
    );

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
    this._asf.getMaritalStatus().subscribe((data) => {
      this.optMaritalStatus = data;
    });
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy(): void {
    this.parentForm.removeControl(this.nameSection);
  }

  get f() {
    return this.childForm.controls;
  }
}
