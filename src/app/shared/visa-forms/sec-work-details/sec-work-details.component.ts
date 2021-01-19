import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormBuilder, FormGroup } from "@angular/forms";
import { IBaseForm } from "../IBaseForm";

@Component({
  selector: "ngx-sec-work-details",
  templateUrl: "./sec-work-details.component.html",
  styleUrls: ["./sec-work-details.component.scss"],
})
export class SecWorkDetailsComponent implements IBaseForm, OnInit {
  constructor(
    private _controlContainer: ControlContainer,
    private _fb: FormBuilder
  ) {}

  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "workDetail";
  @Input("submitted") submitted: boolean;
  @Input("data") data: any;

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
}
