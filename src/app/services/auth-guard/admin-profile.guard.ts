import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileGuard implements CanActivate {
  payload = null;

  constructor( private _authServices: NbAuthService, private _router: Router ){
    this._authServices.onTokenChange().subscribe((token: NbAuthJWTToken)=>{
      if (token.isValid()){
        this.payload = token.getPayload();
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('snapshot', next);
      console.log('guarda de tipo administrador', this.payload);
      if (!this.payload || this.payload.user.role !== 'ADMIN_ROLE' ){
        console.log('sin permiso');
        this._router.navigate(['pages']);
        return false;
      }

      return true;

  }

}
