import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminProcessService {
  constructor(private _http: HttpClient) {}

  // metodo para guardar la asignacion de un consultor con un proceso
  setAsignConsultan(process: any) {
    let url = `${environment.api_url}${environment.api_version}/process/${process._id}`;
    process.status = "ASIGNED";
    return this._http.put(url, { ...process }).pipe();
  }

  // metodo para cargar los consultores
  getConsultans() {
    let url = `${environment.api_url}${environment.api_version}/users/consultants`;

    return this._http.get(url).pipe(
      map((dt: any) => {
        return dt.data.consultants;
      })
    );
  }

  // carga de un proceso especifico
  getProcessToAsigned() {
    let url = `${environment.api_url}${environment.api_version}/process`;

    return this._http.get(url).pipe(
      map((dt: any) => {
        return dt.list;
      })
    );
  }
}
