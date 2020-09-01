import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { User } from "../../models/User";
import { NbAuthService } from "@nebular/auth";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private id: string;
  public user: User;
  public token: string;

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private authService: NbAuthService
  ) {
    this.loadStorage();
  }

  // ===================================================
  //  Metodo de guardado en storage
  // ===================================================
  saveStorage(user: any) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  loadStorage() {
    this.token = "";
    this.user = null;

    this.authService.onTokenChange().subscribe((token) => {
      if (token.isValid()) {
        this.token = token.getValue();
        this.id = token.getPayload().sub;
      }
    });

    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }

  clearStorage() {
    this.user = null;
    localStorage.removeItem("user");
  }

  // ===================================================
  //  Get user by Id
  // ===================================================
  getUser(id: string) {
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.get(url).pipe(
      map((resp: any) => {
        let user: User = resp.data.user;
        this.saveStorage(user);
        return user;
      })
    );
  }

  // ===================================================
  //  Get list of users
  // ===================================================
  getUsers() {
    const url = `${environment.api_url}${environment.api_version}/users`;
    return this._http.get(url).pipe(map((resp: any) => resp.data));
  }
}
