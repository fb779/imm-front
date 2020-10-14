import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, pluck, map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Coupon } from "../../models/Coupon";
import { roles } from "../../config/config";
import { UserService } from "../../services/user/user.service";

import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class CouponsService {
  constructor(private _http: HttpClient, private _userService: UserService) {}

  getListCoupon() {
    const url = `${environment.api_url}${environment.api_version}/coupon`;

    return this._http.get(url).pipe(pluck("data"));
  }

  getCouponId(id: string): Observable<Coupon> {
    const url = `${environment.api_url}${environment.api_version}/coupon/${id}`;

    return this._http.get(url).pipe(
      pluck("data"),
      map((coupon: Coupon) => {
        coupon.share = coupon.share
          .filter((item) => item.from._id === this._userService.user._id)
          .map(({ to, from }) => to._id);
        coupon.activation = moment(coupon.activation).toDate();
        coupon.expiration = moment(coupon.expiration).toDate();
        return coupon;
      })
    );
  }

  createCoupon(coupon: Coupon) {
    const url = `${environment.api_url}${environment.api_version}/coupon`;

    return this._http.post(url, coupon).pipe(pluck("data"));
  }

  editCoupon(id: string, coupon: Coupon) {
    const url = `${environment.api_url}${environment.api_version}/coupon/${id}`;

    return this._http
      .put(url, coupon)
      .pipe
      // pluck("data"),
      // map((coupon: Coupon) => {
      //   coupon.share = coupon.share
      //     .filter((item) => item.from._id === this._userService.user._id)
      //     .map(({ to, from }) => to._id);
      //   coupon.activation = moment(coupon.activation).toDate();
      //   coupon.expiration = moment(coupon.expiration).toDate();
      //   return coupon;
      // }),
      ();
  }

  deleteCoupon(id: string) {
    const url = `${environment.api_url}${environment.api_version}/coupon/${id}`;

    return this._http.delete(url);
    // .pipe(
    //   pluck("data"),
    //   map((coupon: Coupon) => {
    //     coupon.share = coupon.share
    //       .filter((item) => item.from._id === this._userService.user._id)
    //       .map(({ to, from }) => to._id);
    //     coupon.activation = moment(coupon.activation).toDate();
    //     coupon.expiration = moment(coupon.expiration).toDate();
    //     return coupon;
    //   })
    // );
  }

  validCode(code: string) {
    const url = `${environment.api_url}${environment.api_version}/coupon/valid?code=${code}`;

    return this._http.get(url).pipe(pluck("data"));
  }

  getListShare(role: string) {
    const url = `${environment.api_url}${environment.api_version}/users?role=${role}`;

    return this._http.get(url).pipe(
      pluck("data", "users"),
      map((el: any) => {
        return el.map(({ _id, email, first_name, last_name }: any) => ({
          _id,
          email,
          first_name,
          last_name,
        }));
      })
    );
  }

  getListUserConsultant() {
    const url = `${environment.api_url}${environment.api_version}/users?role=${roles.user}`;

    return this._http.get(url).pipe(
      pluck("data", "users"),
      map((el: any) => {
        return el.map(({ _id, email, first_name, last_name }: any) => ({
          _id,
          email,
          first_name,
          last_name,
        }));
      })
    );
  }

  getListUserClient() {
    const url = `${environment.api_url}${environment.api_version}/users?role=${roles.client}`;

    return this._http.get(url).pipe(
      pluck("data", "users"),
      map((el: any) => {
        return el.map(({ _id, email, first_name, last_name }: any) => ({
          _id,
          email,
          first_name,
          last_name,
        }));
      })
    );
  }
}
