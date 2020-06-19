import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap, map } from "rxjs/operators";
import { Process } from "../../models/Process";

@Injectable({
  providedIn: "root",
})
export class UserProcessService {
  constructor(private _http: HttpClient) {}

  // carga de procesos del usuario
  getUserProcesses() {
    let url = `${environment.api_url}${environment.api_version}/process`;

    return this._http.get(url).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map<any, Process[]>((dt: any) => {
        return dt.list;
      })
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // carga de un proceso especifico del usuario
  getUserProcess(id: string) {
    let url = `${environment.api_url}${environment.api_version}/process/${id}`;

    return this._http.get(url).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any) => {
        return dt.process;
      })
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  //  carga el formulario del usuario
  getUserForm(id: string) {
    let url = `${environment.api_url}${environment.api_version}/process/${id}/form/`;

    return this._http.get(url).pipe(
      // tap( dt => console.log('lo recibido en tap 1', dt )),
      map((dt: any) => {
        let client = dt.form.client;
        delete client.__v;
        delete client.birthday;
        // client.birthday = client.birthday.substring(0,10);
        delete dt.form.process;
        delete dt.form.client;
        delete dt.form.createdAt;
        delete dt.form.updatedAt;
        delete dt.form.__v;

        let ndt = Object.assign(client, dt.form);
        return ndt;
      })
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // envio del formulario para guardarlo
  setForm(process: Process, form) {
    // let url = `${environment.api_url}${environment.api_version}/process/save-form`;
    let url = `${environment.api_url}${environment.api_version}/process/${process._id}/form`;

    return this._http
      .post(url, form)
      .pipe(tap((dt) => console.log("respuesta formulario", dt)));
  }

  updateForm(process: Process, form) {
    // let url = `${environment.api_url}${environment.api_version}/process/save-form`;
    let url = `${environment.api_url}${environment.api_version}/process/${process._id}/form`;

    return this._http.put(url, form).pipe(
      // tap( dt => console.log('respuesta formulario',dt))
      map((x: any) => x.data)
    );
  }

  // getProcessClient( id_process: string ){
  //   let url = `${environment.api_url}${environment.api_version}/process/${id_process}/client`;

  //   return this._http.get( url ).pipe(
  //     tap( dt => console.log('respuesta',dt))
  //   );
  // }
}
