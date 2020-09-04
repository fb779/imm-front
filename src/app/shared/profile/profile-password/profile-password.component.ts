import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { User } from "../../../models/User";
import { ToastrService } from "../../../services/services.index";
import { UsersService } from "../../../admin/users/users.service";
import { passwordRegex } from "../../../config/config";

@Component({
  selector: "ngx-profile-password",
  templateUrl: "./profile-password.component.html",
  styleUrls: ["./profile-password.component.scss"],
})
export class ProfilePasswordComponent implements OnInit {
  @Input("user") user: User;
  @Output() userSave: EventEmitter<User> = new EventEmitter<User>();

  formPassword: FormGroup;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private _usersService: UsersService
  ) {}

  ngOnInit() {
    this.build();
  }

  build() {
    this.formPassword = this._fb.group(
      {
        old_password: this._fb.control("", [Validators.required]),
        new_password: this._fb.control("", [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(passwordRegex),
        ]),
        con_password: this._fb.control("", [Validators.required]),
      },
      {
        validators: this.passwordMatch.bind(this),
      }
    );
  }

  get f() {
    return this.formPassword.controls;
  }

  get fe() {
    return this.formPassword.errors;
  }

  passwordMatch(formGroup: FormGroup) {
    const { value: password } = formGroup.get("new_password");
    const { value: confirmPassword } = formGroup.get("con_password");
    return password === confirmPassword ? null : { passwordMatch: true };
  }

  savePassword() {
    if (this.formPassword.invalid) {
      this.submitted = true;
      this._toastr.toastrGenericMessage(
        "Form invalid, please complete the form",
        "Password Form",
        "warning"
      );
      return;
    }

    this._usersService
      .changePassword(this.user._id, this.formPassword.value)
      .subscribe(
        (res) => {
          if (res) {
            this.formPassword.reset();
            this.submitted = false;
            this._toastr.toastrGenericMessage(
              "Password change successfull",
              "Change Pasword",
              "success"
            );
          }
        },
        (err) => {
          this._toastr.toastrGenericMessage(
            err.message,
            "Change Pasword",
            "warning"
          );
        }
      );
  }
}
