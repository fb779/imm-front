import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminProcessService {

  constructor(private _http: HttpClient) { }

  getConsultans(){
    let url = `${ environment.api_url }/users/consultans`;

    return this._http.get( url ).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any)=>{
        return dt.data.consultans;
      }),
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // carga de un proceso especifico
  getProcessToAsigned(){
    let url = `${ environment.api_url }/process/asigned`;

    return this._http.get( url ).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any)=>{
        return dt.data.processes;
      }),
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }
}
