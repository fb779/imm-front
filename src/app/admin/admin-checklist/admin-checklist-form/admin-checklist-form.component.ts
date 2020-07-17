import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { Category } from "../../../models/Category";
import { CheckList } from "../../../models/CheckList";
import { ToastrService } from "../../../services/services.index";
import { AdminChecklistService } from "../admin-checklist.service";

@Component({
  selector: "ngx-admin-checklist-form",
  templateUrl: "./admin-checklist-form.component.html",
  styleUrls: ["./admin-checklist-form.component.scss"],
})
export class AdminChecklistFormComponent implements OnInit {
  id: string;
  check: CheckList = {
    _id: "",
    name: "",
  };
  formCheck: FormGroup;
  submited = false;
  stateText: string = "Inactive";
  visaCategories: Category[] = [];

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _adminChecklistService: AdminChecklistService,
    private _toastr: ToastrService
  ) {
    this._adminChecklistService.getVisaCategories().subscribe((visas) => {
      this.visaCategories = visas;
    });
    this._activateRoute.params.subscribe((params) => {
      this.id = params["id"];

      if (!this.id) {
        this._router.navigate(["/admin", "checklist"]);
      }

      if (this.id !== "new") {
        this.getChecklist(this.id);
      }
    });
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.formCheck = this.formBuilder.group({
      _id: new FormControl(""),
      name: new FormControl(
        "",
        [Validators.required],
        [this.nameExist.bind(this)]
      ),
      group: new FormControl("", [Validators.required]),
      state: new FormControl(false, []),
      visa_categories: new FormControl([], [Validators.required]),
      description: new FormControl("", []),
    });

    this.formCheck.get("state").valueChanges.subscribe((value: any) => {
      if (value) {
        this.stateText = "Active";
      } else {
        this.stateText = "Inactive";
      }
    });
  }

  get f() {
    return this.formCheck.controls;
  }

  /**
   * validacion asincrona del email de usuario
   * -  se realiza verificacion de existencia de ID y comparacion con emial
   * -  caso especial para la modificacion del usuario, valida si el email es diferente
   */
  nameExist(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.check._id || this.check.name !== control.value.toUpperCase()) {
        this._adminChecklistService
          .validName(control.value)
          .subscribe((response) => {
            return !response ? resolve(null) : resolve({ nameExist: true });
          });
      } else {
        resolve(null);
      }
    });
  }

  getChecklist(id: string) {
    this._adminChecklistService.getChecklist(id).subscribe(
      (check: CheckList) => {
        this.check = check;
        delete check.required;
        this.formCheck.setValue(check);
      },
      (err) => {
        this._toastr.toastrGenericMessage(
          `Check-list doesn't exist`,
          "Check-list Information",
          "danger"
        );
        this._router.navigate(["/admin", "checklist"]);
      }
    );
  }

  saveChecklist() {
    if (this.formCheck.invalid) {
      this.submited = true;
      this._toastr.toastrGenericMessage(
        "Complete the information",
        "Check-list information",
        "warning"
      );
      return;
    }

    if (this.id === "new") {
      this._adminChecklistService
        .createChecklist(this.formCheck.value)
        .subscribe((response) => {
          console.log(`Llegada de informacion`, response);
          this._toastr.toastrGenericMessage(
            `Check-list create successfull ${this.formCheck.value.name}`,
            "Check-list",
            "success"
          );
          // this._router.navigate(["/admin/checklist"]);
        });
    }

    if (this.formCheck.value._id) {
      this._adminChecklistService
        .updateChecklist(this.id, this.formCheck.value)
        .subscribe((response) => {
          this._toastr.toastrGenericMessage(
            `Check-list edit successfull ${this.formCheck.value.name}`,
            "Check-list information",
            "success"
          );
          this._router.navigate(["/admin/checklist"]);
        });
    }
  }
}
