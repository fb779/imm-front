import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Coupon } from "../../../models/Coupon";
import { CouponsService } from "../coupons.service";
import { ToastrService, UserService } from "../../../services/services.index";

import * as _ from "underscore";
import * as moment from "moment";
import { roles } from "../../../config/config";

@Component({
  selector: "ngx-make-coupons",
  templateUrl: "./make-coupons.component.html",
  styleUrls: ["./make-coupons.component.scss"],
})
export class MakeCouponsComponent implements OnInit {
  id: string;
  url: string[];
  coupon: Coupon = {
    code: "",
    percent: 0,
    activation: null,
    expiration: null,
    _id: null,
    share: [],
    state: true,
    description: "",
    group: "",
  };
  form_coupon: FormGroup;
  min: Date = null;
  max: Date = null;
  exp_min: Date = null;
  exp_max: Date = null;
  listShare: any[] = [];
  submited = false;
  isAdmin: boolean = false;
  isNew: string = "Create";

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _toastr: ToastrService,
    private _couponServices: CouponsService
  ) {
    this.url = this._router.url.split("/").filter((x) => x.trim() !== "");

    this.isAdmin = this._userService.user.role === roles.admin;

    this._activateRoute.params.subscribe((params) => {
      this.id = params["id"];

      if (!this.id) {
        this._router.navigate([`/${this.url[0]}`, "add-ons"]);
      }

      this.getListShare();

      this.build();

      if (this.id !== "new") {
        this.getCoupon(this.id);
        this.isNew = "Edit";
      } else if (this.id === "new") {
        this.setMinMax();
        this.isNew = "Create";
      }
    });
  }

  ngOnInit() {}

  setMinMax(date: string = null) {
    this.min = !date ? moment().toDate() : moment(date).toDate();
    this.max = moment().add(6, "months").toDate();
  }

  getListShare() {
    const rl =
      this._userService.user.role === roles.admin ? roles.user : roles.client;

    this._couponServices.getListShare(rl).subscribe((resp) => {
      this.listShare = resp;
    });
  }

  build() {
    this.form_coupon = this._fb.group({
      code: this._fb.control(
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")],
        [this.codeExist.bind(this)]
      ),
      percent: this._fb.control(null, [Validators.max(99), this.onlyNumber]),
      activation: this._fb.control(null, [Validators.required]),
      expiration: this._fb.control({ value: null, disabled: true }, [
        Validators.required,
      ]),
      share: this._fb.control([], []),
      _id: this._fb.control(""),
      state: this._fb.control(true),
      description: this._fb.control(""),
      group: this._fb.control(""),
    });

    this.form_coupon
      .get("activation")
      .valueChanges.subscribe((value: string) => {
        let expiration = this.form_coupon.get("expiration");
        if (!expiration.enabled) {
          expiration.enable();
        }

        this.exp_min = moment(value).add(1, "days").toDate();
        expiration.reset();
      });
  }

  get f() {
    return this.form_coupon.controls;
  }

  /*************************************************
   *  Validaciones personalizadas
   *************************************************/
  onlyNumber(control: FormControl): Promise<any> | Observable<any> {
    const regex = new RegExp("^[\\d]*$");
    let rta;
    if (control.value && !regex.test(control.value)) {
      rta = { onlynumber: true };
    } else {
      rta = null;
    }

    return rta;
  }

  codeExist(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      // if (control.value) {
      if (!this.coupon._id || this.coupon.code !== control.value) {
        this._couponServices.validCode(control.value).subscribe((resp) => {
          return resp ? resolve({ codeexist: true }) : resolve(null);
        });
      } else {
        resolve(null);
      }
    });
  }

  /*************************************************
   *  carga del objeto a modificar
   *************************************************/
  getCoupon(id: string) {
    this._couponServices.getCouponId(id).subscribe(
      (coupon: Coupon) => {
        this.coupon = coupon;
        this.setMinMax(coupon.activation.toISOString());
        this.form_coupon.setValue(coupon);
      },
      (err) => {
        this._toastr.toastrGenericMessage(
          `Coupon doesn't exist`,
          "Coupon Information",
          "danger"
        );
        this._router.navigate([`/${this.url[0]}`, "add-ons"]);
      }
    );
  }

  save() {
    if (this.form_coupon.invalid) {
      this.submited = true;
      this._toastr.toastrGenericMessage(
        "Complete the form",
        "Coupon Form",
        "warning"
      );
      return;
    }

    if (this.id === "new") {
      this._couponServices.createCoupon(this.form_coupon.value).subscribe(
        (resp) => {
          this._toastr.toastrGenericMessage(
            "Save create",
            "Coupon form",
            "success"
          );
          this._router.navigate([`/${this.url[0]}`, "add-ons"]);
        }
      );
    }

    if (this.form_coupon.value._id) {
      this._couponServices
        .editCoupon(this.id, this.form_coupon.value)
        .subscribe(
          (resp) => {
            this._toastr.toastrGenericMessage(
              "Save edit",
              "Coupon form",
              "success"
            );
            this._router.navigate([`/${this.url[0]}`, "add-ons"]);
          }
        );
    }
  }
}
