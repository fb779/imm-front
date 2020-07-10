import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminClientService {
  constructor(private _http: HttpClient) {}

  getClients() {
    const url = `${environment.api_url}${environment.api_version}/users?role=client_role`;

    return this._http.get(url).pipe(map(({ data }: any) => data.users));
  }

  createClient() {}

  editClietn() {}

  deleteClient() {}
}
