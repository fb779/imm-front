import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable, of } from "rxjs";

import { User } from "../../../models/User";
import { emailRegex, roles } from "../../../config/config";
import { UsersService } from "../../users/users.service";
import { visaCategories } from "../../../mocks/titles";

import {
  ToastrService,
  AssessmentFormService,
} from "../../../services/services.index";
import { AdminClientService } from "../admin-client.service";

@Component({
  selector: "ngx-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClientComponent implements OnInit {
  id: string;
  formUser: FormGroup;
  formClient: FormGroup;
  user: User = {
    _id: "",
    first_name: "",
    last_name: "",
    active: false,
    role: "",
    email: "",
    client: null,
  };
  submitted = false;
  status: string = "Inactive";
  // visaCategories$ = visaCategories;
  visaCategories$ = this._adminClientService.getVisaCategories();
  _roles = roles;

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _asf: AssessmentFormService,
    private _usersService: UsersService,
    private _adminClientService: AdminClientService,
    private _toastr: ToastrService
  ) {
    this._activateRoute.params.subscribe((params) => {
      this.id = params["id"];
      // this.getUser(this.id);
      if (!this.id) {
        this._router.navigate(["/admin", "users"]);
      }

      if (this.id !== "new") {
        this.getUser(this.id);
      }

      // console.log("Form client user", this.id);
    });
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.formUser = this.formBuilder.group({
      _id: new FormControl(""),
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl(
        "",
        [Validators.required, Validators.pattern(emailRegex)],
        [this.existEmail.bind(this)]
      ),
      role: new FormControl(roles.client, [Validators.required]),
      active: new FormControl(false, [Validators.required]),
      client: new FormControl(null, []),
      password: new FormControl("", [Validators.required]),
      process: new FormControl("", [Validators.required]),
    });

    // this.formClient = this.formBuilder.group({
    //   _id: new FormControl(""),
    //   first_name: new FormControl("", [Validators.required]),
    //   last_name: new FormControl("", [Validators.required]),
    //   relationship: new FormControl("", [Validators.required]),
    //   title: new FormControl("", [Validators.required]),
    //   sex: new FormControl("", [Validators.required]),
    //   country_citizenship: new FormControl("", [Validators.required]),
    //   other_citizenship: new FormControl("", []),
    //   country_residence: new FormControl("", [Validators.required]),
    //   status_residence: new FormControl("", [Validators.required]),
    //   status_residence_other: new FormControl({ value: "", disabled: true }, [
    //      Validators.required,
    //   ]),
    //   age: new FormControl({ value: "", disabled: true }, [ Validators.required, ]),
    // });

    this.formUser.get("active").valueChanges.subscribe((value: any) => {
      if (value) {
        this.status = "Active";
      } else {
        this.status = "Inactive";
      }
    });

    this.formUser.get("_id").valueChanges.subscribe((value: any) => {
      if (value) {
        this.formUser.get("password").clearValidators();
        this.formUser.get("password").reset();
        this.formUser.get("process").clearValidators();
        this.formUser.get("process").disable();
        this.formUser.get("process").reset();
      }
    });
  }

  get userForm() {
    return this.formUser.controls;
  }

  // get clientForm() {
  //   return this.userForm.client;
  // }

  getUser(id: string) {
    this._usersService.getUser(id).subscribe(
      (user: User) => {
        let loadUser = (this.user = user);
        delete loadUser.img;
        // delete loadUser.client;
        delete loadUser.createdAt;
        delete loadUser.updatedAt;
        loadUser["process"] = "";

        this.formUser.setValue(loadUser);
      },
      (err) => {
        this._toastr.toastrGenericMessage(
          `User doesn't exist`,
          "User Information",
          "danger"
        );
        this._router.navigate(["/admin", "clients"]);
      }
    );
  }

  /**
   * validacion asincrona del email de usuario
   * -  se realiza verificacion de existencia de ID y comparacion con emial
   * -  caso especial para la modificacion del usuario, valida si el email es diferente
   */
  existEmail(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.user._id || this.user.email !== control.value) {
        this._usersService.validEmail(control.value).subscribe((response) => {
          return !response ? resolve(null) : resolve({ emailExist: true });
        });
      } else {
        resolve(null);
      }
    });
  }

  randomPassword() {
    this.formUser.get("password").setValue(this._usersService.randomPassword());
  }

  saveUser() {
    console.log("informacion del formulario del cliente", this.formUser.value);
    if (this.formUser.invalid) {
      this.submitted = true;
      this._toastr.toastrGenericMessage(
        "Complete the information",
        "User information",
        "warning"
      );
      return;
    }

    if (this.id === "new") {
      this._usersService
        .createUser(this.formUser.value)
        .subscribe((response) => {
          console.log(`Llegada de informacion`, response);
          this._toastr.toastrGenericMessage(
            `User create successfull ${this.formUser.value.first_name} ${this.formUser.value.last_name}`,
            "User",
            "success"
          );
          this._router.navigate(["/admin/clients"]);
        });
    }

    if (this.formUser.value._id) {
      this._usersService
        .updateUser(this.id, this.formUser.value)
        .subscribe((response) => {
          this._toastr.toastrGenericMessage(
            `User edit successfull ${this.formUser.value.first_name} ${this.formUser.value.last_name}`,
            "User information",
            "success"
          );
          this._router.navigate(["/admin/clients"]);
        });
    }
  }
}
