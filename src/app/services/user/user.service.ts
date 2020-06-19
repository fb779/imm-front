import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { User } from "../../models/User";

import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";
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
    // this.saveStorage();
    // this.authService.onTokenChange().subscribe(( token: NbAuthJWTToken)=>{
    //   if( token.isValid() ){
    //     this.token = token.getValue();
    //     this.id = token.getPayload().sub;
    //     // this.user = token.getPayload().user;
    //   }
    // });
  }

  // ===================================================
  //  Metodo de guardado en storage
  // ===================================================
  saveStorage(user: any) {
    localStorage.setItem("user", JSON.stringify(user));

    this.user = user;
  }

  loadStorage() {
    this.token = "";
    this.user = null;

    this.authService.onTokenChange().subscribe((token) => {
      if (token.isValid()) {
        this.token = token.getValue();
        this.id = token.getPayload().sub;
        // this.user = token.getPayload().user;
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
    // console.log(this.id);
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;

    return this._http.get(url).pipe(
      // tap((r)=> console.log('datos que llegaron', r ) ),
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
