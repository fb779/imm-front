import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  AssessmentFormService,
  FamilyService,
  ToastrService,
} from "../../../services/services.index";
import { relationships } from "../../../config/config";
import { Title } from "../../../models/Titlel";
import { Country } from "../../../models/Country";
import { Client } from "../../../models/Client";
import { Process } from "../../../models/Process";

import { IOption, IOptionNumber } from "../../../models/Option";

@Component({
  selector: "ngx-form-family-members",
  templateUrl: "./form-family-members.component.html",
  styleUrls: ["./form-family-members.component.scss"],
})
export class FormFamilyMembersComponent implements OnInit, OnDestroy {
  @Output() saveForm: EventEmitter<any> = new EventEmitter<any>();
  client$: Observable<Client> = this._familyServices.client$;

  submitted = false;
  clientForm: FormGroup;

  notifier$: Subject<any> = new Subject();

  optAges$: Observable<IOptionNumber[]>;
  optRelationships$: Observable<IOption[]>;
  optTitles$: Observable<Title[]>;
  optSex$: Observable<IOption[]>;
  optCountries$: Observable<Country[]>;
  optStatus$: Observable<IOption[]>;

  constructor(
    private formBuilder: FormBuilder,
    private _asf: AssessmentFormService,
    private _familyServices: FamilyService,
    private _toastr: ToastrService
  ) {
    this.optAges$ = this._asf.getAges();
    this.optRelationships$ = this._asf.getRelationships();
    this.optTitles$ = this._asf.getTitles();
    this.optSex$ = this._asf.getSex();
    this.optCountries$ = this._asf.getCountries();
    this.optStatus$ = this._asf.getStatus();
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

  get f() {
    return this.clientForm.controls;
  }

  /**
   * Metodo para la construccion del formlario
   */
  private buildForm() {
    this.clientForm = this.formBuilder.group({
      _id: this.formBuilder.control("new"),
      first_name: this.formBuilder.control("", [Validators.required]),
      last_name: this.formBuilder.control("", [Validators.required]),
      relationship: this.formBuilder.control("", [Validators.required]),
      title: this.formBuilder.control("", [Validators.required]),
      sex: this.formBuilder.control("", [Validators.required]),
      country_citizenship: this.formBuilder.control("", [Validators.required]),
      other_citizenship: this.formBuilder.control("", []),
      country_residence: this.formBuilder.control("", [Validators.required]),
      status_residence: this.formBuilder.control("", [Validators.required]),
      status_residence_other: this.formBuilder.control(
        { value: "", disabled: true },
        [Validators.required]
      ),
      age: this.formBuilder.control({ value: "", disabled: true }, [
        Validators.required,
      ]),
    });

    this.clientForm.controls["relationship"].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((value: any) => {
        if (value === relationships.child) {
          this.clientForm.get("age").enable();
        } else {
          this.clientForm.get("age").disable();
          this.clientForm.get("age").reset();
        }
      });

    this.clientForm.controls["status_residence"].valueChanges
      .pipe(takeUntil(this.notifier$))
      .subscribe((value: any) => {
        if (value == 5) {
          this.clientForm.get("status_residence_other").enable();
        } else {
          this.clientForm.get("status_residence_other").disable();
          this.clientForm.get("status_residence_other").reset();
        }
      });

    this.client$.pipe(takeUntil(this.notifier$)).subscribe((client) => {
      if (client) {
        this.clientForm.patchValue(client);
      } else {
        this.cancel();
      }
    });
  }

  cancel() {
    this.submitted = false;
    this.clientForm.reset();
  }

  save() {
    // if (this.clientForm.invalid) {
    //   this.submitted = true;
    //   this._toastr.toastrGenericMessage(
    //     "Complete the form",
    //     "Family members",
    //     "warning"
    //   );
    //   return;
    // }

    this.saveForm.emit(this.clientForm.getRawValue());
  }
}
