import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { URL_SERVICIOS } from '../../config/config';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private id: string;
  public user: any;
  public token: string;

  constructor(
    private _http: HttpClient,
    private _route: Router,
    private authService: NbAuthService
  ) {

    // this.authService.onTokenChange().pipe(

    // )

    this.authService.getToken().subscribe(( token: NbAuthJWTToken)=>{
      if( token.isValid() ){
        this.token = token.getValue();
        this.id = token.getPayload().sub;
        this.user = token.getPayload().user;
        // this.getUser(this.id).subscribe((user: any)=>{
        //   this.user = user;
        // });
      }
    });

  }

  // ===================================================
  //  Get user by Id
  // ===================================================
  getUser( id: string){
    console.log(id);
    const url = `${ URL_SERVICIOS }/users/${ id }`;

    return this._http.get(url).pipe(
      map( (resp: any) => resp.data )
    );
  }

  // ===================================================
  //  Get list of users
  // ===================================================
  getUsers(){

    const url = `${ URL_SERVICIOS }/users`;

    return this._http.get(url).pipe(
      map( (resp: any) => resp.data )
    );
  }


}
