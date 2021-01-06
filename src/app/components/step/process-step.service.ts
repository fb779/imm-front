import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { status } from "../../config/config";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProcessStepService {
  constructor(private _http: HttpClient) {}

  setStatusStep(stepId: string, status: string) {
    const url = `${environment.api_url}${environment.api_version}/process/${stepId}/step`;

    return this._http.put(url, { status }).pipe();
  }
}
