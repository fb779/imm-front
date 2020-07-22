import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AdminVisaCategoriesService } from "../admin-visa-categories.service";
import { Category } from "../../../models/Category";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastrService } from "../../../services/services.index";
import { Observable } from "rxjs";

@Component({
  selector: "ngx-admin-visa-categories-form",
  templateUrl: "./admin-visa-categories-form.component.html",
  styleUrls: ["./admin-visa-categories-form.component.scss"],
})
export class AdminVisaCategoriesFormComponent implements OnInit {
  id: string;
  visa_category: Category = {
    _id: "",
    name: "",
  };
  formVisaCategory: FormGroup;
  submited = false;
  activeText: string = "Inactive";

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _adminVisaCategoriesService: AdminVisaCategoriesService,
    private _toastr: ToastrService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params["id"];

      if (!this.id) {
        this._router.navigate(["/admin", "visa-category"]);
      }
      if (this.id !== "new") {
        this.getVisaCategory(this.id);
      }
    });
  }

  ngOnInit() {
    this.build();
  }

  get f() {
    return this.formVisaCategory.controls;
  }

  build() {
    this.formVisaCategory = this.formBuilder.group({
      _id: new FormControl(""),
      name: new FormControl(
        "",
        [Validators.required],
        [this.nameExist.bind(this)]
      ),
      description: new FormControl("", []),
      active: new FormControl(false),
    });

    this.formVisaCategory.get("active").valueChanges.subscribe((value: any) => {
      if (value) {
        this.activeText = "Active";
      } else {
        this.activeText = "Inactive";
      }
    });
  }

  /**
   * validacion asincrona del campo name
   * -  se realiza verificacion de existencia de ID y comparacion con name
   * -  caso especial para la modificacion del usuario, valida si el name es diferente
   */
  nameExist(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      if (
        !this.visa_category._id ||
        this.visa_category.name !== control.value.toUpperCase()
      ) {
        this._adminVisaCategoriesService
          .validName(control.value)
          .subscribe((response) => {
            return !response ? resolve(null) : resolve({ nameExist: true });
          });
      } else {
        resolve(null);
      }
    });
  }

  getVisaCategory(id: string) {
    this._adminVisaCategoriesService.getVisaCategory(id).subscribe(
      (visa: Category) => {
        this.visa_category = visa;
        this.formVisaCategory.setValue(visa);
      },
      (err) => {
        this._toastr.toastrGenericMessage(
          `Check-list doesn't exist`,
          "Check-list Information",
          "danger"
        );
        this._router.navigate(["/admin", "visa-category"]);
      }
    );
  }

  saveVisaCategory() {
    console.log(this.formVisaCategory.value);
    if (this.formVisaCategory.invalid) {
      this.submited = true;
      this._toastr.toastrGenericMessage(
        "Complete the information",
        "Check-list information",
        "warning"
      );
      return;
    }

    if (this.id === "new") {
      this._adminVisaCategoriesService
        .createCategory(this.formVisaCategory.value)
        .subscribe((response) => {
          this._toastr.toastrGenericMessage(
            `Check-list create successfull ${this.formVisaCategory.value.name}`,
            "Check-list",
            "success"
          );
          this._router.navigate(["/admin/visa-category"]);
        });
    }

    if (this.formVisaCategory.value._id) {
      this._adminVisaCategoriesService
        .editCategory(this.id, this.formVisaCategory.value)
        .subscribe((response) => {
          this._toastr.toastrGenericMessage(
            `Check-list edit successfull ${this.formVisaCategory.value.name}`,
            "Check-list information",
            "success"
          );
          this._router.navigate(["/admin/visa-category"]);
        });
    }
  }
}
