import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ControlContainer, FormBuilder } from "@angular/forms";
import { IBaseForm } from "../IBaseForm";

@Component({
  selector: "ngx-sec-family",
  templateUrl: "./sec-family.component.html",
  styleUrls: ["./sec-family.component.scss"],
})
export class SecFamilyComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string;
  @Input("submitted") submitted: boolean;
  @Input("data") data: any;

  constructor(
    private _controlContainer: ControlContainer,
    private _fb: FormBuilder
  ) {}

  build(): void {
    this.parentForm = this._controlContainer.control as FormGroup;

    this.childForm = this._fb.group({});

    this.parentForm.addControl(this.nameSection, this.childForm);
  }
  loadInformation(): void {
    throw new Error("Method not implemented.");
  }
  loadOptions(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {}

  get f() {
    return this.childForm.controls;
  }
}
