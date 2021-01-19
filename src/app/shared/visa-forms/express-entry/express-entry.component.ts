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
import { Router } from "@angular/router";

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
  optLevelEducation = [];
  optYearsEducation = [];

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _porcessServices: UserProcessService,
    private _asf: AssessmentFormService
  ) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");

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

    this._asf.getLevelEducation().subscribe((data) => {
      this.optLevelEducation = data;
    });

    this._asf.getYearsEducation().subscribe((data) => {
      this.optYearsEducation = data;
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
      /*************************************
       * data for express entry
       *************************************/
      p_marital_001: this._formBuilder.control("", [Validators.required]),
      p_marital_002: this._formBuilder.control("", []),
      p_marital_003: this._formBuilder.control("", []),

      p_information_001: this._formBuilder.control("", []),
      p_information_002: this._formBuilder.control("", []),

      p_visit_001: this._formBuilder.control("", []),
      p_visit_002: this._formBuilder.control("", []),
      p_visit_003: this._formBuilder.control("", []),
      p_visit_004: this._formBuilder.control("", []),
      p_visit_005: this._formBuilder.control("", []),

      p_education_001: this._formBuilder.control("", []),
      p_education_list: new FormArray([this.initFormEduList()]),
      p_education_spouse_001: this._formBuilder.control("", []),
      p_education_spouse_list: new FormArray([this.initFormEduList()]),

      p_language_001: this._formBuilder.control("", []),
      p_language_en_001: this._formBuilder.control("", []),
      p_language_en_002: this._formBuilder.control("", []),
      p_language_en_003: this._formBuilder.control("", []),
      p_language_en_004: this._formBuilder.control("", []),
      p_language_en_005: this._formBuilder.control("", []),
      p_language_en_006: this._formBuilder.control("", []),
      p_language_en_007: this._formBuilder.control("", []),

      p_language_fr_001: this._formBuilder.control("", []),
      p_language_fr_002: this._formBuilder.control("", []),
      p_language_fr_003: this._formBuilder.control("", []),
      p_language_fr_004: this._formBuilder.control("", []),
      p_language_fr_005: this._formBuilder.control("", []),
      p_language_fr_006: this._formBuilder.control("", []),

      p_language_spouse_001: this._formBuilder.control("", []),
      p_language_en_spouse_001: this._formBuilder.control("", []),
      p_language_en_spouse_002: this._formBuilder.control("", []),
      p_language_en_spouse_003: this._formBuilder.control("", []),
      p_language_en_spouse_004: this._formBuilder.control("", []),
      p_language_en_spouse_005: this._formBuilder.control("", []),
      p_language_en_spouse_006: this._formBuilder.control("", []),
      p_language_en_spouse_007: this._formBuilder.control("", []),

      p_language_fr_spouse_001: this._formBuilder.control("", []),
      p_language_fr_spouse_002: this._formBuilder.control("", []),
      p_language_fr_spouse_003: this._formBuilder.control("", []),
      p_language_fr_spouse_004: this._formBuilder.control("", []),
      p_language_fr_spouse_005: this._formBuilder.control("", []),
      p_language_fr_spouse_006: this._formBuilder.control("", []),

      p_workdetail_001: this._formBuilder.control("", []),
      p_workdetail_002: this._formBuilder.control("", []),
      p_workdetail_003: this._formBuilder.control("", []),
      p_workdetail_004: this._formBuilder.control("", []),

      p_workdetail_current_005: this._formBuilder.control("", []),
      p_workdetail_current_006: this._formBuilder.control("", []),
      p_workdetail_current_007: this._formBuilder.control("", []),
      p_workdetail_current_008: this._formBuilder.control("", []),
      p_workdetail_current_009: this._formBuilder.control("", []),
      p_workdetail_current_010: this._formBuilder.control("", []),

      p_workdetail_list: new FormArray([]),
      p_workdetail_spouse_list: new FormArray([]),

      p_family_001: this._formBuilder.control("", []),
      p_family_002: this._formBuilder.control("", []),
      p_family_003: this._formBuilder.control("", []),
      p_family_004: this._formBuilder.control("", []),
      p_family_005: this._formBuilder.control("", []),

      p_money_001: this._formBuilder.control("", []),

      comments: this._formBuilder.control(""),
    });

    this.f.status_residence.valueChanges.subscribe((value: any) => {
      if (value == 5) {
        this.forma.get("status_residence_other").enable();
      } else {
        this.forma.get("status_residence_other").disable();
        this.forma.get("status_residence_other").reset();
      }
    });

    this.f.p_marital_001.valueChanges.subscribe((value: any) => {
      console.log("cambio en pregunta p_marital_001");
      // TODO: if value === 2 "Married or common law, need enabled other fields"
    });
  }

  get f() {
    return this.forma.controls;
  }

  /*************************************************************
   * Education section
   *************************************************************/
  initFormEduList() {
    return this._formBuilder.group({
      level: ["", [Validators.required]],
      study: ["", [Validators.required]],
      institution: ["", [Validators.required]],
      duration: ["", [Validators.required]],
      country: ["", [Validators.required]],
    });
  }
  get fEduList() {
    return this.f.p_education_list as FormArray;
  }

  get fEduSpList() {
    return this.f.p_education_spouse_list as FormArray;
  }

  add() {
    if (this.fEduList.length === 10) return;

    this.fEduList.push(this.initFormEduList());
  }
  remove(ix: number) {
    if (this.fEduList.length > 1) {
      this.fEduList.removeAt(ix);
    }
  }
  /*************************************************************/

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

  guardar() {
    console.log("validando formulario");
    this.submitted = true;

    if (this.forma.invalid) {
      // this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      console.log("errores", this.forma.errors);
      return;
    }

    console.log("Valores", this.forma.value);
  }
}
