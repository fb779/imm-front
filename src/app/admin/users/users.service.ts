import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, tap } from "rxjs/operators";
import { User } from "../../models/User";

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
    // console.log(fields);
    let url = `${environment.api_url}${environment.api_version}/users${fields}`;

    return this._http.get(url).pipe(map((resp: any) => resp.data));
  }

  getUser(id: string) {
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.get(url).pipe(
      map((resp: any) => {
        let user: User = { ...resp.data.user, password: "" };
        return user;
      })
    );
  }

  createUser(user: User) {
    console.log(`'nuevo ususario para crear' ${user.first_name}`);
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
}
