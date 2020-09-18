import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, pluck } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Coupon } from "../../models/coupon";

@Injectable({
  providedIn: "root",
})
export class CouponsService {
  constructor(private _http: HttpClient) {}

  createCoupon(coupon: Coupon) {
    const url = `${environment.api_url}${environment.api_version}/coupon`;

    return this._http
      .post(url, coupon)
      .pipe(tap((x) => console.log("llegada de creacion del coupon", x)));
  }

  getListCoupon() {
    const url = `${environment.api_url}${environment.api_version}/coupon`;

    return this._http.get(url).pipe(
      tap((x) => console.log("Carga de datos", x)),
      pluck("data")
    );
  }

  getCouponId(id: string) {
    const url = ``;

    this._http.get(url).pipe();
  }

  validCode(code: string) {
    const url = ``;

    return this._http
      .get(url)
      .pipe(tap((x) => console.log("Validacion de datos", x)));
  }
}
