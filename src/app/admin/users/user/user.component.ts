import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import {
  ToastrService,
  AssessmentFormService,
  UserService,
} from "../../../services/services.index";
import { UsersService } from '../users.service';
import { User } from "../../../models/User";
import { emailRegex } from '../../../config/config';
import { opsRoles } from '../../../mocks/titles';
import { of } from 'rxjs';

@Component({
  selector: "ngx-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  id: string;
  formClient: FormGroup;
  user: User = {
    _id: "",
    first_name: "",
    last_name: "",
    active: false,
    role: "",
    email: "",
  };
  submitted = false;
  status: string = 'Inactive';
  roles$ = of(opsRoles);

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _asf: AssessmentFormService,
    private _userService: UserService,
    private _usersService: UsersService,
    private _toastr: ToastrService
  ) {
    this._activateRoute.params.subscribe((params) => {
      this.id = params["id"];
      if (this.id && this.id !== "new") {
        this.getUser(this.id);
      }
    });
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.formClient = this.formBuilder.group({
      _id: new FormControl("", [Validators.required]),
      first_name: new FormControl("", [Validators.required]),
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(emailRegex),
      ]),
      role: new FormControl("", [Validators.required]),
      active: new FormControl(false, [Validators.required]),
    });

    this.formClient.controls["active"].valueChanges.subscribe(
      (value: any) => {
        if (value){
          this.status = 'Active';
        } else {
          this.status = 'Inactive';
        }
      }
    );
  }

  get f() {
    return this.formClient.controls;
  }

  getUser(id: string) {
    // this._userService.getUser(id).subscribe(
    this._usersService.getUser(id).subscribe(
      (user) => {
        this.user = user;

        let loadUser = user;
        delete loadUser.img;
        delete loadUser.client;
        delete loadUser.createdAt;
        delete loadUser.updatedAt;

        this.formClient.setValue(loadUser);
      },
      (err) => console.log("Error al cargar el usuario")
    );
  }

  saveUser() {
    if (this.formClient.invalid) {
      this.submitted = true;
      this._toastr.toastrGenericMessage(
        "Complete the information",
        "User information",
        "warning"
      );
      return;
    }

    // if ( this.id === 'new' ){
    //   this._usersService.createUser( this.formClient.value ).subscribe(
    //     (response)=> console.log(`Llegada de informacion`, response)
    //   );
    // }

    if ( this.formClient.value._id ){
      this._usersService.updateUser( this.id, this.formClient.value ).subscribe(
        (response)=> {
          console.log(`Edicion de informacion`, response)
          this._toastr.toastrGenericMessage(
            `User edit successfull ${ this.formClient.value.first_name } ${ this.formClient.value.last_name }`,
            "User information",
            "success"
          );
          this._router.navigate(['/admin/users']);
        }

      );
    }





  }
}
