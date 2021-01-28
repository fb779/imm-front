import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Title } from "../../../models/Titlel";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AssessmentFormService } from "../../../services/services.index";
import { Country } from "../../../models/Country";
import { IBaseForm } from "../IBaseForm";

@Component({
  selector: "ngx-sec-personal-information",
  templateUrl: "./sec-personal-information.component.html",
  styleUrls: ["./sec-personal-information.component.scss"],
})
export class SecPersonalInformationComponent
  implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "personalInformation";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optTitles: Title[] = [];
  optSex = [];
  optCountries: Country[] = [];
  optStatus = [];

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
      title: this._fb.control("", [Validators.required]),
      sex: this._fb.control("", [Validators.required]),
      first_name: this._fb.control("", [Validators.required]),
      last_name: this._fb.control("", [Validators.required]),
      email: this._fb.control("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
      telephone: this._fb.control("", [
        Validators.required,
        Validators.pattern("[0-9]*$"),
      ]),
      country_citizenship: this._fb.control("", [Validators.required]),
      other_citizenship: this._fb.control("", []),
      country_residence: this._fb.control("", [Validators.required]),
      status_residence: this._fb.control("", [Validators.required]),
      status_residence_other: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      age: this._fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(99),
      ]),
    });

    this.childForm.controls["status_residence"].valueChanges.subscribe(
      (value: any) => {
        if (value == 5) {
          this.childForm.get("status_residence_other").enable();
        } else {
          this.childForm.get("status_residence_other").reset();
          this.childForm.get("status_residence_other").disable();
        }
      }
    );

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";
      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({
      ...loadValues,
    });
  }

  loadOptions() {
    this._asf.getTitles().subscribe((data) => {
      this.optTitles = data;
    });

    this._asf.getSex().subscribe((data) => {
      this.optSex = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });

    this._asf.getStatus().subscribe((data) => {
      this.optStatus = data;
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy(): void {
    console.log("destruccion del componente");
    this.parentForm.removeControl(this.nameSection);
  }

  get f() {
    return this.childForm.controls;
  }
}
