import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { tap, map } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class UserTypeGuard implements CanActivate {
  payload: any = null;

  constructor(private _authServices: NbAuthService, private _router: Router) {
    this._authServices.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.payload = token.getPayload();
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.payload.exp <= moment().valueOf()) {
      this._router.navigate(["auth/logout"]);
      return false;
    }

    if (this.payload.user.role !== next.data.role) {
      this._router.navigate(["pages"]);
      return false;
    }

    return true;
  }
}
