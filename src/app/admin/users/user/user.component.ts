import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastrService } from "../../../services/services.index";
import { UsersService } from "../users.service";
import { User } from "../../../models/User";
import { emailRegex } from "../../../config/config";
import { opsRoles } from "../../../mocks/titles";
import { of, Observable } from "rxjs";

@Component({
  selector: "ngx-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  id: string;
  formUser: FormGroup;
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
  roles$ = of(opsRoles);

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _usersService: UsersService,
    private _toastr: ToastrService
  ) {
    this._activateRoute.params.subscribe((params) => {
      this.id = params["id"];

      if (!this.id) {
        this._router.navigate(["/admin", "users"]);
      }

      if (this.id !== "new") {
        this.getUser(this.id);
      }
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
      role: new FormControl("", [Validators.required]),
      active: new FormControl(false, [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

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
      }
    });
  }

  get f() {
    return this.formUser.controls;
  }

  getUser(id: string) {
    this._usersService.getUser(id).subscribe(
      (user: User) => {
        let loadUser = (this.user = user);
        delete loadUser.img;
        delete loadUser.client;
        delete loadUser.createdAt;
        delete loadUser.updatedAt;

        this.formUser.setValue(loadUser);
      },
      (err) => {
        this._toastr.toastrGenericMessage(
          `User doesn't exist`,
          "User Information",
          "danger"
        );
        this._router.navigate(["/admin", "users"]);
      }
    );
  }

  randomPassword() {
    this.formUser.get("password").setValue(this._usersService.randomPassword());
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

  saveUser() {
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
          this._router.navigate(["/admin/users"]);
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
          this._router.navigate(["/admin/users"]);
        });
    }
  }
}
