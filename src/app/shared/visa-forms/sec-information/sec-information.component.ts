import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  ControlContainer,
  Validators,
} from "@angular/forms";
import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "ngx-sec-information",
  templateUrl: "./sec-information.component.html",
  styleUrls: ["./sec-information.component.scss"],
})
export class SecInformationComponent implements IBaseForm, OnInit, OnDestroy {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "information";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  notifier$: Subject<any> = new Subject();

  optYesNo$: Observable<IOption[]>;

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
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";
      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({
      ...loadValues,
    });
  }

  loadOptions(): void {
    this.optYesNo$ = this._asf.getYesNo();
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  get f() {
    return this.childForm.controls;
  }
}
