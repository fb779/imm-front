import { Component, Input, OnInit, OnDestroy } from "@angular/core";
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
import { takeUntil } from "rxjs/operators";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "ngx-sec-family",
  templateUrl: "./sec-family.component.html",
  styleUrls: ["./sec-family.component.scss"],
})
export class SecFamilyComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "family";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  notifier$: Subject<any> = new Subject();

  optYesNo$: Observable<IOption[]>;
  optRangeChildren$: Observable<IOption[]>;

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
        this.isAgeCorrectly(1, 99).bind(this),
      ]),
    });

    // this.pf.maritalStatus &&
    //   this.pf.maritalStatus
    //     .get("p_marital_001")
    //     .valueChanges.pipe(takeUntil(this.notifier$))
    //     .subscribe((value) => {
    //       if (value == 1) {
    //         this.childForm.get("p_family_002").clearValidators();
    //         this.childForm.get("p_family_002").reset();
    //         this.childForm.get("p_family_003").reset();
    //         this.childForm.get("p_family_004").reset();
    //         this.childForm.get("p_family_002").disable();
    //         this.childForm.get("p_family_003").disable();
    //         this.childForm.get("p_family_004").disable();
    //       } else {
    //         this.childForm.get("p_family_002").enable();
    //         this.childForm.get("p_family_003").enable();
    //         this.childForm.get("p_family_004").enable();
    //         this.childForm
    //           .get("p_family_002")
    //           .setValidators(Validators.required);
    //       }
    //     });

    this.childForm
      .get("p_family_002")
      .valueChanges.pipe(takeUntil(this.notifier$))
      .subscribe((value) => {
        if (value == 1) {
          this.childForm.get("p_family_003").enable();
        } else {
          this.childForm.get("p_family_003").reset();
          this.childForm.get("p_family_004").reset();
          this.childForm.get("p_family_003").disable();
          this.childForm.get("p_family_004").disable();
        }
      });

    this.childForm
      .get("p_family_003")
      .valueChanges.pipe(takeUntil(this.notifier$))
      .subscribe((value) => {
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
    this.optYesNo$ = this._asf.getYesNo();
    this.optRangeChildren$ = this._asf.getRangeChildren();
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
            acc && cur.trim() && !isNaN(cur) && Number(cur.trim()) <= maxAge
            // Number(cur.trim()) >= minAge &&
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

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
    this.parentForm.removeControl(this.nameSection);
  }

  // get pf() {
  //   return this.parentForm.controls;
  // }

  // get isSingle() {
  //   return this.pf.maritalStatus &&
  //     this.pf.maritalStatus.get("p_marital_001").value == 1
  //     ? true
  //     : false;
  // }

  get f() {
    return this.childForm.controls;
  }
}
