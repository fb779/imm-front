import { Injectable, Type, ErrorHandler } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  token: string;

  constructor(private authService: NbAuthService) {
    // this.authService.getToken().subscribe(( token: NbAuthJWTToken)=>{
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      this.token = token.getValue();
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('login')) {
      return next.handle(req);
      // .pipe(
      //   catchError( this.manejarError )
      // );
    }

    const httpOptions = this.getHeaders()

    const reqClone = req.clone(httpOptions);

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(err: any) {
    // console.log('error en el servicio');
    console.warn(err);
    // console.log(err.error.data.message);
    return throwError('Error en el servicio del usuario');
  }

  getHeaders() {
    let headersAppend: any;
    if (this.token) {
      headersAppend = new HttpHeaders()
        .set("Accept", "application/json")
        .set("Authorization", "Bearer " + this.token);
    } else {
      headersAppend = new HttpHeaders().set("Accept", "application/json");
    }

    let Options = {
      headers: headersAppend
    };

    return Options;
  }
}
