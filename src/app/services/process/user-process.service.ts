import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProcessService {

  constructor(private _http: HttpClient) { }

  // carga de un proceso especifico
  getUserProcess(id: string){
    let url = `${ environment.api_url }/process/${ id }`;

    return this._http.get( url ).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any)=>{
        return dt.data.process;
      }),
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // carga de procesos del usuario
  getUserProcesses(){
    let url = `${ environment.api_url }/process`;

    return this._http.get( url ).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any)=>{
        return dt.data.processes;
      }),
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  //  carga el formulario del usuario
  getUserForm( id: string ){
    let url = `${ environment.api_url }/process/form-process/${ id }`;

    return this._http.get( url ).pipe(
      // tap( dt => console.log('lo recibido en tap 1', dt )),
      map((dt: any)=>{
        let ndt = Object.assign({}, dt.data.form);
        delete ndt.createdAt;
        delete ndt.updatedAt;
        delete ndt.__v;
        return ndt;
      }),
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // envio del formulario para guardarlo
  setForm( form ){
    let url = `${ environment.api_url }/process/save-form`;

    return this._http.post( url, form );

  }



}
