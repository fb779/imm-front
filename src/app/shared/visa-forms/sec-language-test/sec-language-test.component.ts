import { Component, Input, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";
import { exams, scores } from "../../../mocks/score-language";

import * as moment from "moment";

@Component({
  selector: "ngx-sec-language-test",
  templateUrl: "./sec-language-test.component.html",
  styleUrls: ["./sec-language-test.component.scss"],
})
export class SecLanguageTestComponent implements IBaseForm, OnInit {
  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "languageTest";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  min: Date;
  max: Date;

  optYesNo: IOption[] = [];

  optEnglishTest: IOption[] = [
    { name: exams.ielts, value: exams.ielts },
    { name: exams.celpip, value: exams.celpip },
  ];

  optIeltsExam: IOption[] = [
    { name: "Academic", value: "A" },
    { name: "General", value: "G" },
  ];

  optScoreEnSpeaking: IOption[] = [];
  optScoreEnListening: IOption[] = [];
  optScoreEnReading: IOption[] = [];
  optScoreEnWriting: IOption[] = [];

  optFrenchTest: IOption[] = [
    { name: exams.tcf, value: exams.tcf },
    { name: exams.tef, value: exams.tef },
  ];

  optScoreFrSpeaking: IOption[] = [];
  optScoreFrListening: IOption[] = [];
  optScoreFrReading: IOption[] = [];
  optScoreFrWriting: IOption[] = [];

  constructor(
    private _cc: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.min = moment()
      .subtract(2, "years")
      .hour(23)
      .minute(59)
      .second(59)
      .toDate();

    this.max = moment().hour(23).minute(59).second(59).toDate();

    this.loadOptions();
  }

  build() {
    this.parentForm = this._cc.control as FormGroup;

    this.childForm = this._fb.group(
      {
        p_language_001: this._fb.control("", [Validators.required]),
        p_language_en_001: this._fb.control({ value: "", disabled: true }, []),
        p_language_en_002: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_en_003: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_en_004: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_en_005: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_en_006: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_en_007: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_fr_001: this._fb.control({ value: "", disabled: true }, []),
        p_language_fr_002: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_fr_003: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_fr_004: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_fr_005: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),
        p_language_fr_006: this._fb.control({ value: "", disabled: true }, [
          Validators.required,
        ]),

        p_language_spouse_001: this._fb.control("", [Validators.required]),
        p_language_spouse_en_001: this._fb.control(
          { value: "", disabled: true },
          []
        ),
        p_language_spouse_en_002: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_en_003: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_en_004: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_en_005: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_en_006: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_en_007: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_fr_001: this._fb.control(
          { value: "", disabled: true },
          []
        ),
        p_language_spouse_fr_002: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_fr_003: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_fr_004: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_fr_005: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
        p_language_spouse_fr_006: this._fb.control(
          { value: "", disabled: true },
          [Validators.required]
        ),
      },
      {
        validators: [
          this.isLanguageTestComplete,
          this.isSpouseLanguageTestComplete.bind(this),
        ],
      }
    );

    this.pf.maritalStatus &&
      this.pf.maritalStatus
        .get("p_marital_001")
        .valueChanges.subscribe((value) => {
          if (value == 2) {
            this.childForm.get("p_language_spouse_001").enable();
          } else {
            this.childForm.get("p_language_spouse_001").reset();
            this.childForm.get("p_language_spouse_001").disable();

            this.childForm.get("p_language_spouse_en_001").reset();
            this.childForm.get("p_language_spouse_en_001").disable();
            this.childForm.get("p_language_spouse_en_002").reset();
            this.childForm.get("p_language_spouse_en_002").disable();
            this.childForm.get("p_language_spouse_en_003").reset();
            this.childForm.get("p_language_spouse_en_003").disable();
            this.childForm.get("p_language_spouse_en_004").reset();
            this.childForm.get("p_language_spouse_en_004").disable();
            this.childForm.get("p_language_spouse_en_005").reset();
            this.childForm.get("p_language_spouse_en_005").disable();
            this.childForm.get("p_language_spouse_en_006").reset();
            this.childForm.get("p_language_spouse_en_006").disable();
            this.childForm.get("p_language_spouse_en_007").reset();
            this.childForm.get("p_language_spouse_en_007").disable();

            this.childForm.get("p_language_spouse_fr_001").reset();
            this.childForm.get("p_language_spouse_fr_001").disable();
            this.childForm.get("p_language_spouse_fr_002").reset();
            this.childForm.get("p_language_spouse_fr_002").disable();
            this.childForm.get("p_language_spouse_fr_003").reset();
            this.childForm.get("p_language_spouse_fr_003").disable();
            this.childForm.get("p_language_spouse_fr_004").reset();
            this.childForm.get("p_language_spouse_fr_004").disable();
            this.childForm.get("p_language_spouse_fr_005").reset();
            this.childForm.get("p_language_spouse_fr_005").disable();
            this.childForm.get("p_language_spouse_fr_006").reset();
            this.childForm.get("p_language_spouse_fr_006").disable();
          }
        });

    this.childForm.controls["p_language_001"].valueChanges.subscribe(
      (value) => {
        if (value == 1) {
          this.childForm.get("p_language_en_001").enable();
          this.childForm.get("p_language_fr_001").enable();
          // this.childForm.get("p_language_en_003").enable();
        } else {
          this.childForm.get("p_language_en_001").reset();
          this.childForm.get("p_language_en_001").disable();
          this.childForm.get("p_language_en_002").reset();
          this.childForm.get("p_language_en_002").disable();
          this.childForm.get("p_language_en_003").reset();
          this.childForm.get("p_language_en_003").disable();
          this.childForm.get("p_language_en_004").reset();
          this.childForm.get("p_language_en_004").disable();
          this.childForm.get("p_language_en_005").reset();
          this.childForm.get("p_language_en_005").disable();
          this.childForm.get("p_language_en_006").reset();
          this.childForm.get("p_language_en_006").disable();
          this.childForm.get("p_language_en_007").reset();
          this.childForm.get("p_language_en_007").disable();

          this.childForm.get("p_language_fr_001").reset();
          this.childForm.get("p_language_fr_001").disable();
          this.childForm.get("p_language_fr_002").reset();
          this.childForm.get("p_language_fr_002").disable();
          this.childForm.get("p_language_fr_003").reset();
          this.childForm.get("p_language_fr_003").disable();
          this.childForm.get("p_language_fr_004").reset();
          this.childForm.get("p_language_fr_004").disable();
          this.childForm.get("p_language_fr_005").reset();
          this.childForm.get("p_language_fr_005").disable();
          this.childForm.get("p_language_fr_006").reset();
          this.childForm.get("p_language_fr_006").disable();
        }
      }
    );

    this.childForm.get("p_language_en_001").valueChanges.subscribe((value) => {
      this.childForm.get("p_language_en_004").reset();
      this.childForm.get("p_language_en_005").reset();
      this.childForm.get("p_language_en_006").reset();
      this.childForm.get("p_language_en_007").reset();

      if (value) {
        this.childForm.get("p_language_en_003").enable();
        this.childForm.get("p_language_en_004").enable();
        this.childForm.get("p_language_en_005").enable();
        this.childForm.get("p_language_en_006").enable();
        this.childForm.get("p_language_en_007").enable();
      }

      switch (value) {
        case exams.ielts:
          this.childForm.get("p_language_en_002").enable();
          break;
        case exams.celpip:
          this.childForm.get("p_language_en_002").reset();
          this.childForm.get("p_language_en_002").disable();
          break;
        default:
          this.childForm.get("p_language_en_002").reset();
          this.childForm.get("p_language_en_003").reset();

          this.childForm.get("p_language_en_002").disable();
          this.childForm.get("p_language_en_003").disable();
          this.childForm.get("p_language_en_004").disable();
          this.childForm.get("p_language_en_005").disable();
          this.childForm.get("p_language_en_006").disable();
          this.childForm.get("p_language_en_007").disable();
          break;
      }

      // operador de cortocircuito para ejecutar la funcion cuando exista un valor
      value && this.loadScoreEnTest(value);
    });

    this.childForm.get("p_language_fr_001").valueChanges.subscribe((value) => {
      this.childForm.get("p_language_fr_003").reset();
      this.childForm.get("p_language_fr_004").reset();
      this.childForm.get("p_language_fr_005").reset();
      this.childForm.get("p_language_fr_006").reset();

      if (value) {
        this.childForm.get("p_language_fr_002").enable();
        this.childForm.get("p_language_fr_003").enable();
        this.childForm.get("p_language_fr_004").enable();
        this.childForm.get("p_language_fr_005").enable();
        this.childForm.get("p_language_fr_006").enable();
      } else {
        this.childForm.get("p_language_fr_002").reset();
        this.childForm.get("p_language_fr_002").disable();
        this.childForm.get("p_language_fr_003").disable();
        this.childForm.get("p_language_fr_004").disable();
        this.childForm.get("p_language_fr_005").disable();
        this.childForm.get("p_language_fr_006").disable();
      }

      // operador de cortocircuito para ejecutar la funcion cuando exista un valor
      value && this.loadScoreFrTest(value);
    });

    /**
     *  spouse
     */
    this.childForm.controls["p_language_spouse_001"].valueChanges.subscribe(
      (value) => {
        if (value == 1) {
          this.childForm.get("p_language_spouse_en_001").enable();
          this.childForm.get("p_language_spouse_fr_001").enable();
          // this.childForm.get("p_language_spouse_en_003").enable();
        } else {
          this.childForm.get("p_language_spouse_en_001").reset();
          this.childForm.get("p_language_spouse_en_001").disable();
          this.childForm.get("p_language_spouse_en_002").reset();
          this.childForm.get("p_language_spouse_en_002").disable();
          this.childForm.get("p_language_spouse_en_003").reset();
          this.childForm.get("p_language_spouse_en_003").disable();
          this.childForm.get("p_language_spouse_en_004").reset();
          this.childForm.get("p_language_spouse_en_004").disable();
          this.childForm.get("p_language_spouse_en_005").reset();
          this.childForm.get("p_language_spouse_en_005").disable();
          this.childForm.get("p_language_spouse_en_006").reset();
          this.childForm.get("p_language_spouse_en_006").disable();
          this.childForm.get("p_language_spouse_en_007").reset();
          this.childForm.get("p_language_spouse_en_007").disable();

          this.childForm.get("p_language_spouse_fr_001").reset();
          this.childForm.get("p_language_spouse_fr_001").disable();
          this.childForm.get("p_language_spouse_fr_002").reset();
          this.childForm.get("p_language_spouse_fr_002").disable();
          this.childForm.get("p_language_spouse_fr_003").reset();
          this.childForm.get("p_language_spouse_fr_003").disable();
          this.childForm.get("p_language_spouse_fr_004").reset();
          this.childForm.get("p_language_spouse_fr_004").disable();
          this.childForm.get("p_language_spouse_fr_005").reset();
          this.childForm.get("p_language_spouse_fr_005").disable();
          this.childForm.get("p_language_spouse_fr_006").reset();
          this.childForm.get("p_language_spouse_fr_006").disable();
        }
      }
    );

    this.childForm
      .get("p_language_spouse_en_001")
      .valueChanges.subscribe((value) => {
        this.childForm.get("p_language_spouse_en_004").reset();
        this.childForm.get("p_language_spouse_en_005").reset();
        this.childForm.get("p_language_spouse_en_006").reset();
        this.childForm.get("p_language_spouse_en_007").reset();

        if (value) {
          this.childForm.get("p_language_spouse_en_003").enable();
          this.childForm.get("p_language_spouse_en_004").enable();
          this.childForm.get("p_language_spouse_en_005").enable();
          this.childForm.get("p_language_spouse_en_006").enable();
          this.childForm.get("p_language_spouse_en_007").enable();
        }

        switch (value) {
          case exams.ielts:
            this.childForm.get("p_language_spouse_en_002").enable();
            break;
          case exams.celpip:
            this.childForm.get("p_language_spouse_en_002").reset();
            this.childForm.get("p_language_spouse_en_002").disable();
            break;
          default:
            this.childForm.get("p_language_spouse_en_002").reset();
            this.childForm.get("p_language_spouse_en_003").reset();

            this.childForm.get("p_language_spouse_en_002").disable();
            this.childForm.get("p_language_spouse_en_003").disable();
            this.childForm.get("p_language_spouse_en_004").disable();
            this.childForm.get("p_language_spouse_en_005").disable();
            this.childForm.get("p_language_spouse_en_006").disable();
            this.childForm.get("p_language_spouse_en_007").disable();
            break;
        }

        // operador de cortocircuito para ejecutar la funcion cuando exista un valor
        value && this.loadScoreEnTest(value);
      });

    this.childForm
      .get("p_language_spouse_fr_001")
      .valueChanges.subscribe((value) => {
        this.childForm.get("p_language_spouse_fr_003").reset();
        this.childForm.get("p_language_spouse_fr_004").reset();
        this.childForm.get("p_language_spouse_fr_005").reset();
        this.childForm.get("p_language_spouse_fr_006").reset();

        if (value) {
          this.childForm.get("p_language_spouse_fr_002").enable();
          this.childForm.get("p_language_spouse_fr_003").enable();
          this.childForm.get("p_language_spouse_fr_004").enable();
          this.childForm.get("p_language_spouse_fr_005").enable();
          this.childForm.get("p_language_spouse_fr_006").enable();
        } else {
          this.childForm.get("p_language_spouse_fr_002").reset();
          this.childForm.get("p_language_spouse_fr_002").disable();
          this.childForm.get("p_language_spouse_fr_003").disable();
          this.childForm.get("p_language_spouse_fr_004").disable();
          this.childForm.get("p_language_spouse_fr_005").disable();
          this.childForm.get("p_language_spouse_fr_006").disable();
        }

        // operador de cortocircuito para ejecutar la funcion cuando exista un valor
        value && this.loadScoreFrTest(value);
      });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation() {
    const loadValues = Object.keys(this.f).reduce((acc, cur) => {
      let value = this.data[cur] || "";

      if (
        this.data[cur] &&
        (cur === "p_language_en_003" ||
          cur === "p_language_fr_002" ||
          cur === "p_language_spouse_en_003" ||
          cur === "p_language_spouse_fr_002")
      ) {
        value = moment(this.data[cur]).toDate();
      }

      return { ...acc, [cur]: value };
    }, {});

    this.childForm.patchValue({ ...loadValues });
  }

  loadOptions() {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });
  }

  loadScoreEnTest(test: string) {
    const { speaking, listening, reading, writing } = scores[test];

    this.optScoreEnSpeaking = speaking;
    this.optScoreEnListening = listening;
    this.optScoreEnReading = reading;
    this.optScoreEnWriting = writing;
  }

  loadScoreFrTest(test: string) {
    const { speaking, listening, reading, writing } = scores[test];

    this.optScoreFrSpeaking = speaking;
    this.optScoreFrListening = listening;
    this.optScoreFrReading = reading;
    this.optScoreFrWriting = writing;
  }

  ngOnInit() {
    this.build();

    this.loadInformation();
    // this._cdr.detectChanges();
  }
  get pf() {
    return this.parentForm.controls;
  }

  get isMarried() {
    return this.pf.maritalStatus &&
      this.pf.maritalStatus.get("p_marital_001").value == 2
      ? true
      : false;
  }

  get f() {
    return this.childForm.controls;
  }

  isLanguageTestComplete(form: AbstractControl): { [key: string]: any } | null {
    return form.get("p_language_001").value == 1 &&
      !form.get("p_language_en_001").value &&
      !form.get("p_language_fr_001").value
      ? { langTest: true }
      : null;
  }

  isSpouseLanguageTestComplete(
    form: AbstractControl
  ): { [key: string]: any } | null {
    return this.isMarried &&
      form.get("p_language_spouse_001").value == 1 &&
      !form.get("p_language_spouse_en_001").value &&
      !form.get("p_language_spouse_fr_001").value
      ? { spLangTest: true }
      : null;
  }
}
