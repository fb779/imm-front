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

@Component({
  selector: "ngx-sec-finatial",
  templateUrl: "./sec-finatial.component.html",
  styleUrls: ["./sec-finatial.component.scss"],
})
export class SecFinatialComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "financial";
  @Input("submitted") submitted: boolean;
  @Input("data") data: any;

  optFinantialFounds: IOption[] = [
    {
      value: "1",
      name: "less than $12,960 (does not meet minium financial requirement)",
    },
    { value: "2", name: "$12,960 (minimum required for 1 family member)" },
    { value: "3", name: "$16,135 (minimum required for 2 family members)" },
    { value: "4", name: "$19,836 (minimum required for 3 family members)" },
    { value: "5", name: "$24,083 (minimum required for 4 family members)" },
    { value: "6", name: "$27,315 (minimum required for 5 family members)" },
    { value: "7", name: "$30,806 (minimum required for 6 family members)" },
    { value: "8", name: "$34,299 (minimum required for 7 family members)" },
    {
      value: "9",
      name: "$35,000+ (minimum required for 7 or more family members)",
    },
  ];

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
      p_finantial_001: this._fb.control("", [Validators.required]),
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

  loadOptions() {}

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
