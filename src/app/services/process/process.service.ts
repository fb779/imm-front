import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap, map } from "rxjs/operators";
import { Process } from "../../models/Process";

@Injectable({
  providedIn: "root",
})
export class ProcessService {
  constructor(private _http: HttpClient) {}

  getProcessesList() {
    const url = `${environment.api_url}${environment.api_version}/process`;

    return this._http.get(url).pipe(
      map<any, Process[]>((dt: any) => {
        return dt.list;
      })
    );
  }

  getProcessById(id: string) {
    let url = `${environment.api_url}${environment.api_version}/process/${id}`;

    return this._http.get(url).pipe(
      map((dt: any) => {
        return dt.process;
      })
    );
  }

  createProcess(process: Process, form) {
    let url = `${environment.api_url}${environment.api_version}/process/${process._id}/form`;

    return this._http
      .post(url, form)
      .pipe(tap((dt) => console.log("respuesta formulario", dt)));
  }
}
