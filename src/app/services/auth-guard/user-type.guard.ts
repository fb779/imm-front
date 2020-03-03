import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { tap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {

  constructor( private _router: Router, private authService: NbAuthService) {
    // console.log('Hola desde el guard');
   }

   canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns
    let user;
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      user = token.getPayload();
    });
    console.log('Se cargo el token en el guard',user.user);

    // if (user.user.role === 'ADMIN_ROLE' || user.user.role === 'USER_ROLE'){
    //   this._router.navigate(['admin']);
    // }

    // if (user.user.role === 'CLIENT_ROLE'){
    //   this._router.navigate(['pages']);
    // }

    return false;
  }

}
