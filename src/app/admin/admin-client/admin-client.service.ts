import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminClientService {
  constructor(private _http: HttpClient) {}

  getClients() {
    const url = `${environment.api_url}${environment.api_version}/users?role=client_role`;

    return this._http.get(url).pipe(map(({ data }: any) => data.users));
  }

  getVisaCategories() {
    const url = `${environment.api_url}${environment.api_version}/visa-category`;

    return this._http.get(url).pipe(
      map(({ list }: any) =>
        list.map(({ _id, name, title }) => ({
          _id,
          name,
          value: title,
        }))
      )
    );
  }
}
