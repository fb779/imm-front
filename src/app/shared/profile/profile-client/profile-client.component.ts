import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { Client } from "../../../models/Client";
import { emailRegex } from "../../../config/config";
import { UsersService } from "../../../admin/users/users.service";
import {
  ToastrService,
  AssessmentFormService,
} from "../../../services/services.index";
import { IOption } from "../../../models/Option";

import { Country } from "../../../models/Country";
import { Title } from "../../../models/Titlel";

import * as _ from "underscore";
import { User } from "../../../models/User";

@Component({
  selector: "ngx-profile-client",
  templateUrl: "./profile-client.component.html",
  styleUrls: ["./profile-client.component.scss"],
})
export class ProfileClientComponent implements OnInit {
  @Input("user") user: User;
  @Output() userSave: EventEmitter<User> = new EventEmitter<User>();

  userClient: any;
  formClient: FormGroup;
  submitted = false;
  status = status;

  optTitles$: Observable<Title[]> = this._asf.getTitles();
  optSex$: Observable<IOption[]> = this._asf.getSex();
  optCountries$: Observable<Country[]> = this._asf.getCountries();
  optStatus$: Observable<IOption[]> = this._asf.getStatus();

  constructor(
    private _fb: FormBuilder,
    private _asf: AssessmentFormService,
    private _toastr: ToastrService,
    private _usersService: UsersService
  ) {}

  ngOnInit() {
    this.userClient = _.pick(this.user, [
      "_id",
      "first_name",
      "last_name",
      // "title",
      // "sex",
      "email",
      // "telephone",
      // "birthday",
      // "age",
      // "country_citizenship",
      // "other_citizenship",
      // "country_residence",
      // "status_residence",
      // "status_residence_other",
      // "relationship",
      // "type",
      // "active",
    ]);

    this.build();
  }

  build() {
    this.formClient = this._fb.group({
      _id: new FormControl("", [Validators.required], []),
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]),
      // title: new FormControl("", [Validators.required], []),
      // sex: new FormControl("", [Validators.required], []),
      email: new FormControl(
        "",
        [Validators.required, Validators.pattern(emailRegex)],
        [this.existEmail.bind(this)]
      ),
      // telephone: new FormControl("", [Validators.required], []),
      // birthday: new FormControl("", [Validators.required], []),
      // age: new FormControl("", [
      //   Validators.required,
      //   Validators.min(0),
      //   Validators.max(99),
      // ]),
      // country_citizenship: new FormControl("", [Validators.required], []),
      // other_citizenship: new FormControl("", [], []),
      // country_residence: new FormControl("", [Validators.required], []),
      // status_residence: new FormControl("", [Validators.required], []),
      // status_residence_other: new FormControl("", [Validators.required], []),
      // relationship: new FormControl("", [Validators.required], []),
      // active: new FormControl("", [Validators.required], []),
    });

    // this.formClient.controls["status_residence"].valueChanges.subscribe(
    //   (value: any) => {
    //     if (value == 5) {
    //       this.formClient.get("status_residence_other").enable();
    //     } else {
    //       this.formClient.get("status_residence_other").disable();
    //       this.formClient.get("status_residence_other").reset();
    //     }
    //   }
    // );

    this.formClient.setValue(this.userClient);
  }

  get f() {
    return this.formClient.controls;
  }

  /**
   * validacion asincrona del email de usuario
   * -  se realiza verificacion de existencia de ID y comparacion con emial
   * -  caso especial para la modificacion del usuario, valida si el email es diferente
   */
  existEmail(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve) => {
      if (this.userClient._id && this.userClient.email !== control.value) {
        this._usersService.validEmail(control.value).subscribe((response) => {
          return !response ? resolve(null) : resolve({ emailExist: true });
        });
      } else {
        resolve(null);
      }
    });
  }

  saveUser() {
    if (this.formClient.invalid) {
      this.submitted = true;
      this._toastr.toastrGenericMessage(`Form is nvalid`, "Form", "warning");
      return;
    }

    this._usersService
      .updateUser(this.user._id, this.formClient.value)
      .subscribe((resp: any) => {
        if (resp.ok) {
          this._toastr.toastrGenericMessage(
            `Updated information successfull`,
            "Updated Profile",
            "success"
          );
          this.userSave.emit(resp.user);
        }
      });
  }
}
