import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  payload;
  constructor( private _router: Router, private _authService: NbAuthService) {
    this._authService.onTokenChange().subscribe((token: NbAuthJWTToken)=>{
      if (token.isValid()){
        this.payload = token.getPayload();
      }
    });
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this._authService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          this._router.navigate(['auth/logout']);
          return false;
        }
        return true;
      }),
    );
    return true;
  }

  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
