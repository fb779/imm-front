import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ToastrService } from "../../../services/services.index";
import * as moment from "moment";
import { Observable } from "rxjs";
import { CouponsService } from "../coupons.service";

@Component({
  selector: "ngx-make-coupons",
  templateUrl: "./make-coupons.component.html",
  styleUrls: ["./make-coupons.component.scss"],
})
export class MakeCouponsComponent implements OnInit {
  form_coupon: FormGroup;
  min: Date;
  max: Date;
  submited = false;

  constructor(
    private _fb: FormBuilder,
    private _toast: ToastrService,
    private _couponServices: CouponsService
  ) {
    this.min = moment().toDate();
    this.max = moment().month(12).day(31).toDate();
    console.log(this.max);
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.form_coupon = this._fb.group({
      code: this._fb.control(
        "",
        [Validators.required],
        [this.codeExist.bind(this)]
      ),
      percent: this._fb.control("", [Validators.max(99), this.onlyNumber]),
      activation: this._fb.control("", [Validators.required]),
      expiration: this._fb.control("", [Validators.required]),
    });
  }

  get f() {
    return this.form_coupon.controls;
  }

  onlyNumber(control: FormControl): Promise<any> | Observable<any> {
    const regex = new RegExp("^[\\d]*$");
    let rta;
    if (!regex.test(control.value)) {
      rta = { onlynumber: true };
    } else {
      rta = null;
    }

    return rta;
  }

  codeExist(control: FormControl): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      if (control.value) {
        this._couponServices.validCode(control.value).subscribe((resp) => {
          return !resp ? resolve(null) : resolve({ codeexist: true });
        });
      } else {
        resolve(null);
      }
    });
  }

  save() {
    console.log(this.form_coupon.value);

    if (this.form_coupon.invalid) {
      this.submited = true;
      this._toast.toastrGenericMessage(
        "Complete the form",
        "Coupon Form",
        "warning"
      );
      return;
    }

    this._couponServices
      .createCoupon(this.form_coupon.value)
      .subscribe((resp) => {
        console.log("guardado del coupon", resp);
      });
  }
}
