import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, tap, pluck } from "rxjs/operators";
import { User } from "../../models/User";

import * as _ from "underscore";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  getUsers(...params) {
    let fields = params.reduce(
      (acc, cur) =>
        acc ? `${acc}&${cur.field}=${cur.value}` : `?${cur.field}=${cur.value}`,
      ""
    );

    let url = `${environment.api_url}${environment.api_version}/users${fields}`;

    return this._http.get(url).pipe(map((resp: any) => resp.data));
  }

  getUser(id: string) {
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.get(url).pipe(
      pluck("data", "user"),
      map((us: any) => {
        let user: User = { ...us, password: "" };
        return user;
      })
    );
  }

  createUser(user: User) {
    delete user._id;
    const url = `${environment.api_url}${environment.api_version}/users`;
    return this._http.post(url, user).pipe();
  }

  updateUser(id: string, user: User) {
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.put(url, user).pipe();
  }

  randomPassword() {
    return Math.random().toString(36).slice(-8);
  }

  validEmail(email: string) {
    const url = `${environment.api_url}${environment.api_version}/users/valid?email=${email}`;
    return this._http.get(url).pipe(map((el: any) => el.data));
  }

  changePassword(id: string, data: any) {
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    // data = _.pick(data, ["old_password", "new_password"]);
    return this._http.patch(url, data).pipe(map((el: any) => el.data));
  }
}
