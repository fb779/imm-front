import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  ControlContainer,
  Validators,
} from "@angular/forms";
import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";

@Component({
  selector: "ngx-sec-information",
  templateUrl: "./sec-information.component.html",
  styleUrls: ["./sec-information.component.scss"],
})
export class SecInformationComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "information";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optYesNo: IOption[];

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
      p_information_002: this._fb.control("", [Validators.required]),
    });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation(): void {
    const loadValues = Object.keys(this.childForm.value).reduce((acc, cur) => {
      return this.data[cur] ? { ...acc, [cur]: this.data[cur] } : acc;
    }, {});

    this.childForm.setValue({
      ...this.childForm.value,
      ...loadValues,
    });
  }

  loadOptions(): void {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
