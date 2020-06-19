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
    return this._http.put(url, { ...process }).pipe(
      tap((d) => console.log("lo recibido en tap 1", d))
      // map((dt: any)=>{
      //   return dt.data;
      // }),
    );
  }

  // metodo para cargar los consultores
  getConsultans() {
    let url = `${environment.api_url}${environment.api_version}/users/consultants`;

    return this._http.get(url).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any) => {
        return dt.data.consultants;
      })
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }

  // carga de un proceso especifico
  getProcessToAsigned() {
    let url = `${environment.api_url}${environment.api_version}/process`;

    return this._http.get(url).pipe(
      // tap(d => console.log('lo recibido en tap 1', d)),
      map((dt: any) => {
        return dt.list;
      })
      // tap(d => console.log('lo recibido en tap 2', d)),
    );
  }
}
