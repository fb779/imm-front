import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { pluck, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Client } from "../../models/Client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private _http: HttpClient) {}

  getClientById(id_client): Observable<Client> {
    const url = `${environment.api_url}${environment.api_version}/clients/${id_client}`;

    return this._http.get(url).pipe(pluck("data", "client"));
  }
}
