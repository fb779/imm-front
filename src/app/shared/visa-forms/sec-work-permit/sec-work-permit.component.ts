import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Subject, Observable } from "rxjs";

import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/services.index";
import { takeUntil, tap, shareReplay } from "rxjs/operators";
import { IOption } from "../../../models/Option";

import * as moment from "moment";

@Component({
  selector: "ngx-sec-work-permit",
  templateUrl: "./sec-work-permit.component.html",
  styleUrls: ["./sec-work-permit.component.scss"],
})
export class SecWorkPermitComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "workPermit";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  min: Date;
  max: Date;

  notifier$: Subject<any> = new Subject();

  optYesNo$: Observable<IOption[]>;
  optApplayWorkPermit$: Observable<IOption[]>;

  constructor(
    private _parentControl: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.min = moment()
      .subtract(3, "years")
      .hour(23)
      .minute(59)
      .second(59)
      .toDate();

    this.max = moment().hour(23).minute(59).second(59).toDate();
    this.loadOptions();
  }

  build() {
    this.parentForm = this._parentControl.control as FormGroup;

    this.childForm = this._fb.group({
      p_workpermit_001: this._fb.control("", [Validators.required]),
      p_workpermit_002: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
      p_workpermit_003: this._fb.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
    });

    this.childForm
      .get("p_workpermit_001")
      .valueChanges.pipe(takeUntil(this.notifier$))
      .subscribe((value) => {
        if (value == 1) {
          this.childForm.get("p_workpermit_002").enable();
          this.childForm.get("p_workpermit_003").enable();
        } else {
          this.childForm.get("p_workpermit_002").reset();
          this.childForm.get("p_workpermit_003").reset();
          this.childForm.get("p_workpermit_002").disable();
          this.childForm.get("p_workpermit_003").disable();
        }
      });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    this.optYesNo$ = this._asf.getYesNo();
  }

  loadOptions() {
    this.optYesNo$ = this._asf.getYesNo();
    this.optApplayWorkPermit$ = this._asf.getApplayWorkPermit();
  }

  ngOnInit() {
    this.build();
    // this.loadInformation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

  get f() {
    return this.childForm.controls;
  }
}
