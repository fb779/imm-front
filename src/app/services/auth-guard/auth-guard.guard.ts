import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router} from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor( private _router: Router, private authService: NbAuthService, private _userServices: UserService) {
    // console.log('Hola desde el guard');
    console.log('info del usuario',this._userServices.user);
    console.log('token del usuario',this._userServices.token);
   }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns

    return this.authService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          // this._router.navigate(['auth/login']);
          this._router.navigate(['auth/logout']);
          return false;
        }
        return true;
      }),
    );
    // return true;
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
