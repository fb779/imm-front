import { Inject, Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NbAuthToken } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,
    @Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER) protected filter) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // do not intercept request whose urls are filtered by the injected filter
    console.log('Interceptor 1 ', req);
    console.log('Interceptor', this.filter(req));
    if (!this.filter(req)) {
      return this.authService.isAuthenticatedOrRefresh().pipe(
        switchMap(authenticated => {
          if (authenticated) {
            return this.authService.getToken().pipe(
              switchMap((token: NbAuthToken) => {
                console.log('Control iterceptor');
                //const JWT = `Bearer ${token.getValue()}`;  <--- replace this line with the next

                const httpOptions = this.getHeaders(token.getValue());

                console.log('Cabeceras', httpOptions);

                req = req.clone(httpOptions);

                return next.handle(req);
              }),
            )
          } else {
            // Request is sent to server without authentication so that the client code
            // receives the 401/403 error and can act as desired ('session expired', redirect to login, aso)
            return next.handle(req);
          }
        }),
      )
    } else {
      return next.handle(req);
    }
  }

  protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }

  private getHeaders(token) {
    let headersAppend: any;

    if (token) {
      headersAppend = new HttpHeaders()
        .set("Accept", "application/json")
        .set("Authorization", "Bearer " + token);
    } else {
      headersAppend = new HttpHeaders().set("Accept", "application/json");
    }

    let Options = {
      headers: headersAppend
    };

    return Options;
  }
}