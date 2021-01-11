import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { status } from "../../../config/config";
import { Process } from "../../../models/Process";
import {
  AssessmentFormService,
  UserProcessService,
} from "../../../services/services.index";
import { Title } from "../../../models/Titlel";
import { Country } from "../../../models/Country";

@Component({
  selector: "ngx-express-entry",
  templateUrl: "./express-entry.component.html",
  styleUrls: ["./express-entry.component.scss"],
})
export class ExpressEntryComponent implements OnInit {
  linearMode = true;

  @Input("process") process: Process;

  id: string;
  submitted = false;
  cmStatus = status;
  url: string[];

  forma: FormGroup;

  optTitles: Title[] = [];
  optSex = [];
  optAccompanying = [];
  optYesNo = [];
  optCountries: Country[] = [];
  optStatus = [];
  optProvinces = [];
  optMaritalStatus = [];
  optPropousVisit = [];
  optStayCanada = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _porcessServices: UserProcessService,
    private _asf: AssessmentFormService
  ) {
    this._asf.getTitles().subscribe((data) => {
      this.optTitles = data;
    });

    this._asf.getSex().subscribe((data) => {
      this.optSex = data;
    });

    this._asf.getAccompanying().subscribe((data) => {
      this.optAccompanying = data;
    });

    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });

    this._asf.getStatus().subscribe((data) => {
      this.optStatus = data;
    });

    this._asf.getProvinces().subscribe((data) => {
      this.optProvinces = data;
    });

    this._asf.getMaritalStatus().subscribe((data) => {
      this.optMaritalStatus = data;
    });

    this._asf.getPropousVisit().subscribe((data) => {
      this.optPropousVisit = data;
    });

    this._asf.getStayCanada().subscribe((data) => {
      this.optStayCanada = data;
    });
  }

  ngOnInit() {
    this.build();

    this.loadForm();
  }

  build() {
    this.forma = this._formBuilder.group({
      _id: this._formBuilder.control("nuevo"),
      kind: this._formBuilder.control(""),
      // 'process': this._formBuilder.control('', [Validators.required]),
      title: this._formBuilder.control("", [Validators.required]),
      sex: this._formBuilder.control("", [Validators.required]),
      first_name: this._formBuilder.control("", [Validators.required]),
      last_name: this._formBuilder.control("", [Validators.required]),
      email: this._formBuilder.control("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
      telephone: this._formBuilder.control("", [
        Validators.required,
        Validators.pattern("[0-9]*$"),
      ]),
      country_citizenship: this._formBuilder.control("", [Validators.required]),
      other_citizenship: this._formBuilder.control("", []),
      country_residence: this._formBuilder.control("", [Validators.required]),
      status_residence: this._formBuilder.control("", [Validators.required]),
      status_residence_other: this._formBuilder.control(
        { value: "", disabled: true },
        [Validators.required]
      ),
      age: this._formBuilder.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(99),
      ]),
      destiny: this._formBuilder.control("", [Validators.required]),
      marital_status: this._formBuilder.control("", [Validators.required]),
      // 'number_accompanying': this._formBuilder.control(0, [Validators.required]),
      purpose_visit: this._formBuilder.control("", [Validators.required]),
      letter_invitation: this._formBuilder.control("", [Validators.required]),
      stay_canada: this._formBuilder.control("", [Validators.required]),
      funds: this._formBuilder.control("", [Validators.required]),
      disease: this._formBuilder.control("", [Validators.required]),
      criminal_act: this._formBuilder.control("", [Validators.required]),
      refuse_canada: this._formBuilder.control("", [Validators.required]),
      comments: this._formBuilder.control("", []),
    });

    this.forma.controls["status_residence"].valueChanges.subscribe(
      (value: any) => {
        if (value == 5) {
          this.forma.get("status_residence_other").enable();
        } else {
          this.forma.get("status_residence_other").disable();
          this.forma.get("status_residence_other").reset();
        }
      }
    );
  }

  loadForm() {
    if (this.process && this.process.status !== status.active) {
      this._porcessServices
        .getUserForm(this.process._id)
        .subscribe((form: any) => {
          const { client, ...rest } = form;

          const loadDt = { ...client, ...rest };

          delete loadDt.birthday;
          delete loadDt.process;
          delete loadDt.client;
          delete loadDt.createdAt;
          delete loadDt.updatedAt;
          delete loadDt.__v;

          this.forma.setValue({ ...this.forma.value, ...loadDt });
        });
    }
  }

  get f() {
    return this.forma.controls;
  }

  guardar() {}
}
