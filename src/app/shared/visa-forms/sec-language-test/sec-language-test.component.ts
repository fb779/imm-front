import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { IBaseForm } from "../IBaseForm";
import { AssessmentFormService } from "../../../services/services.index";
import { IOption } from "../../../models/Option";

@Component({
  selector: "ngx-sec-language-test",
  templateUrl: "./sec-language-test.component.html",
  styleUrls: ["./sec-language-test.component.scss"],
})
export class SecLanguageTestComponent implements IBaseForm, OnInit {
  constructor(
    private _controlContainer: ControlContainer,
    private _fb: FormBuilder,
    private _asf: AssessmentFormService
  ) {
    this.loadOptions();
  }

  parentForm: FormGroup;
  childForm: FormGroup;

  @Input("nameSection") nameSection: string = "";
  @Input("submitted") submitted: boolean = false;
  @Input("data") data: any = {};

  optYesNo: IOption[] = [];

  optEnglishTest: IOption[] = [
    { name: "IELTS", value: "IELTS" },
    { name: "CELPIP", value: "CELPIP" },
  ];

  optIeltsExam: IOption[] = [
    { name: "Academic", value: "A" },
    { name: "General", value: "G" },
  ];

  optScoreEnSpeaking: IOption[] = [];
  optScoreEnListening: IOption[] = [];
  optScoreEnReading: IOption[] = [];
  optScoreEnWriting: IOption[] = [];

  // optFrenchTest: IOption[] = [
  //   { name: "TFC", value: "TFC" },
  //   { name: "TEF", value: "TEF" },
  // ];

  // optScoreFrSpeaking: IOption[] = [];
  // optScoreFrListening: IOption[] = [];
  // optScoreFrReading: IOption[] = [];
  // optScoreFrWriting: IOption[] = [];

  build(): void {
    this.parentForm = this._controlContainer.control as FormGroup;

    this.childForm = this._fb.group({
      p_language_001: this._fb.control("", [Validators.required]),
      p_language_en_001: this._fb.control("", []),
      p_language_en_002: this._fb.control("", []),
      p_language_en_003: this._fb.control("", []),
      p_language_en_004: this._fb.control("", []),
      p_language_en_005: this._fb.control("", []),
      p_language_en_006: this._fb.control("", []),
      p_language_en_007: this._fb.control("", []),
    });

    this.parentForm.addControl(this.nameSection, this.childForm);
  }

  loadInformation(): void {}

  loadOptions(): void {
    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });
  }

  ngOnInit() {
    this.build();
    this.loadInformation();
  }

  get f() {
    return this.childForm.controls;
  }
}
