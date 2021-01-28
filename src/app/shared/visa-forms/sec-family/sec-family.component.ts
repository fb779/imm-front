import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  ControlContainer,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { IBaseForm } from "../IBaseForm";
import { IOption } from "../../../models/Option";
import { AssessmentFormService } from "../../../services/services.index";
import { agesRegex } from "../../../config/config";

@Component({
  selector: "ngx-sec-family",
  templateUrl: "./sec-family.component.html",
  styleUrls: ["./sec-family.component.scss"],
})
export class SecFamilyComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "family";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optYesNo: IOption[] = [];
  optRangeChildren: IOption[] = [
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
    { value: "6", name: "6" },
    { value: "7", name: "7" },
    { value: "8", name: "8" },
    { value: "9", name: "9" },
    { value: "10", name: "10" },
    { value: "11", name: "11" },
    { value: "12", name: "12" },
    { value: "13", name: "13" },
    { value: "14", name: "14" },
    { value: "15", name: "15" },
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
      p_family_001: this._fb.control("", [Validators.required]),
      p_family_002: this._fb.control("", [Validators.required]),
      p_family_003: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      p_family_004: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
        this.isAgeCorrectly(1, 25).bind(this),
      ]),
    });

    this.childForm.get("p_family_002").valueChanges.subscribe((value) => {
      if (value == 1) {
        this.childForm.get("p_family_003").enable();
      } else {
        this.childForm.get("p_family_003").reset();
        this.childForm.get("p_family_004").reset();
        this.childForm.get("p_family_003").disable();
        this.childForm.get("p_family_004").disable();
      }
    });

    this.childForm.get("p_family_003").valueChanges.subscribe((value) => {
      if (!value) {
        this.childForm.get("p_family_004").reset();
        this.childForm.get("p_family_004").disable();
      } else {
        this.childForm.get("p_family_004").enable();
      }
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

  loadOptions() {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });
  }

  isAgeCorrectly(minAge: Number, maxAge: Number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) return null;

      const requiredAges = Number(this.f.p_family_003.value);

      const isValid = String(control.value.trim())
        .split(",")
        .reduce((acc, cur: any, i, arr) => {
          if (arr.length !== requiredAges) return false;

          return (
            acc &&
            cur.trim() &&
            !isNaN(cur) &&
            Number(cur.trim()) >= minAge &&
            Number(cur.trim()) <= maxAge
          );
        }, true);

      return agesRegex.test(control.value) && isValid
        ? null
        : { ageComplete: { requiredAges, minAge, maxAge } };
    };
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
