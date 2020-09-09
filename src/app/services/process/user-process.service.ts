import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap, map, pluck } from "rxjs/operators";
import { Process } from "../../models/Process";

@Injectable({
  providedIn: "root",
})
export class UserProcessService {
  constructor(private _http: HttpClient) {}

  // carga de procesos del usuario
  getUserProcesses() {
    const url = `${environment.api_url}${environment.api_version}/process`;

    return this._http.get(url).pipe(
      map<any, Process[]>((dt: any) => {
        return dt.list;
      })
    );
  }

  // carga de un proceso especifico del usuario
  getUserProcess(id: string) {
    const url = `${environment.api_url}${environment.api_version}/process/${id}`;

    return this._http.get(url).pipe(
      map((dt: any) => {
        return dt.process;
      })
    );
  }

  //  carga el formulario del usuario
  getUserForm(id: string) {
    const url = `${environment.api_url}${environment.api_version}/process/${id}/form/`;

    return this._http.get(url).pipe(
      map((dt: any) => {
        let client = dt.form.client;
        delete client.__v;
        delete client.birthday;
        delete dt.form.process;
        delete dt.form.client;
        delete dt.form.createdAt;
        delete dt.form.updatedAt;
        delete dt.form.__v;

        let ndt = Object.assign(client, dt.form);
        return ndt;
      })
    );
  }

  // envio del formulario para guardarlo
  setForm(process: Process, form) {
    const url = `${environment.api_url}${environment.api_version}/process/${process._id}/form`;

    return this._http.post(url, form).pipe();
  }

  updateForm(process: Process, form) {
    const url = `${environment.api_url}${environment.api_version}/process/${process._id}/form`;

    return this._http.put(url, form).pipe(map((x: any) => x.data));
  }

  loadPhoto(name: string) {
    const url = `${environment.api_url}${environment.api_version}/photo/${name}`;
    return this._http.get(url).pipe(
      pluck("data")
      // map((el: any) => el.data)
    );
  }
}
