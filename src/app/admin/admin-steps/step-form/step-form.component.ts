import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Observable } from "rxjs";
import { NbDialogRef } from "@nebular/theme";
import { ToastrService } from "../../../services/toastr/toastr.service";
import { Step } from "../../../models/Step.model";
import { StepService } from "../step.service";
import * as _ from "underscore";

@Component({
  selector: "ngx-step-form",
  templateUrl: "./step-form.component.html",
  styleUrls: ["./step-form.component.scss"],
})
export class StepFormComponent implements OnInit {
  @Input("visaList") visaList: any = [];
  @Input("step") step: Step = {
    _id: "",
    name: "",
    description: "",
    order: "",
    visa_categorie: { _id: "", name: "", title: "" },
    active: "ACTIVE",
  };

  // currentStep: {
  //   _id: string;
  //   name: string;
  //   description: string;
  //   order: string;
  //   visa_categorie: string;
  //   active: string;
  // };
  stepForm: FormGroup;
  submitted = false;

  constructor(
    protected ref: NbDialogRef<StepFormComponent>,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private _stepService: StepService
  ) {}

  ngOnInit() {
    this.build();
  }

  performInput(step: Step) {
    return {
      ...step,
      visa_categorie: step.visa_categorie._id,
    };
  }

  build() {
    this.stepForm = this._fb.group({
      _id: this._fb.control("", [], []),
      name: this._fb.control(
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]
        // [this.existNameStep.bind(this)]
      ),
      order: this._fb.control("", [
        Validators.required,
        Validators.pattern(/^[0-9]{1,2}$/),
        Validators.maxLength(2),
        Validators.min(1),
        Validators.max(99),
      ]),
      description: this._fb.control("", [Validators.pattern(/^[\w\s]*$/)]),
      visa_categorie: this._fb.control("", [Validators.required]),
      active: this._fb.control("ACTIVE", []),
    });

    this.stepForm.setValue(this.performInput(this.step));
  }

  get f() {
    return this.stepForm.controls;
  }

  /**
   * validacion asincrona del name.
   * -  se realiza verificacion del name bajo los criterios de nuevo step
   * -  caso especial para la modificacion del step, valida si el name es diferente
   */
  existNameStep(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve) => {
      if (!this.step._id || this.step.name !== control.value) {
        this._stepService.validName(control.value).subscribe((response) => {
          return !response ? resolve(null) : resolve({ nameExist: true });
        });
      } else {
        resolve(null);
      }
    });
  }

  cancel() {
    this.ref.close();
  }

  createStep() {
    if (this.stepForm.invalid) {
      this.submitted = true;
      return false;
    }

    this._stepService.createStep(this.stepForm.value).subscribe((step) => {
      this._toastr.toastrGenericMessage(
        "New step created successfull",
        "Step Form",
        "success"
      );
      this.ref.close(step);
    });
  }

  editStep() {
    if (this.stepForm.invalid) {
      this.submitted = true;
      return false;
    }

    this._stepService
      .editStep(this.step._id, this.stepForm.value)
      .subscribe((step) => {
        this._toastr.toastrGenericMessage(
          "Edit step is successfull",
          "Step Form",
          "success"
        );
        this.ref.close(step);
      });
  }
}
