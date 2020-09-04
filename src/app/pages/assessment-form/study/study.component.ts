import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { Observable } from "rxjs";
import { AssessmentFormService } from "../../../services/assessment-form/assessment-form.service";
import { Title } from "../../../models/Titlel";
import { Country } from "../../../models/Country";

@Component({
  selector: "ngx-study",
  templateUrl: "./study.component.html",
  styleUrls: ["./study.component.scss"],
})
export class StudyComponent implements OnInit {
  form_study: FormGroup;

  optTitles: Title[] = [];
  optSex = [];
  optYesNo = [];
  optCountries: Country[] = [];
  optStatus = [];
  optProvinces = [];
  optMaritalStatus = [];
  optPropousVisit = [];
  optStayCanada = [];

  constructor(private _asf: AssessmentFormService) {
    this.form_study = new FormGroup({
      title: new FormControl("", [Validators.required]),
      sex: new FormControl("", [Validators.required]),
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
      telephone: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*$"),
      ]),
      country_citizenship: new FormControl("", [Validators.required]),
      other_citizenship: new FormControl("", [Validators.required]),
      country_residence: new FormControl("", [Validators.required]),
      status_residence: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      destiny: new FormControl("", [Validators.required]),
      marital_status: new FormControl("", [Validators.required]),
      intended_education: new FormControl("", [Validators.required]),
      current_education: new FormControl("", [Validators.required]),
      process_education: new FormControl("", [Validators.required]),
      funds: new FormControl("", [Validators.required]),
      disease: new FormControl("", [Validators.required]),
      criminal_act: new FormControl("", [Validators.required]),
      refused_canada: new FormControl("", [Validators.required]),
      comments: new FormControl("", [Validators.required]),
    });

    this._asf.getTitles().subscribe((data) => {
      this.optTitles = data;
    });
  }

  ngOnInit() {}

  guardar() {}
}
