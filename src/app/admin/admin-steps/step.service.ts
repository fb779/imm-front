import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observer, Subject, Observable, combineLatest } from "rxjs";
import { tap, pluck, map, switchMap } from "rxjs/operators";
import { Step } from "../../models/Step.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class StepService {
  private url = `${environment.api_url}${environment.api_version}/step`;

  constructor(private _http: HttpClient) {}

  getStepList(): Observable<Step[]> {
    return this._http.get<Step[]>(this.url).pipe(pluck("data"));
  }

  getStepId(id: string) {
    return this._http.get(`${this.url}/${id}`).pipe(pluck("data"));
  }

  createStep(step: Step): Observable<Step> {
    return this._http
      .post<Step>(`${this.url}`, { ...step })
      .pipe(pluck("data"));
  }

  editStep(id: string, step: Step): Observable<Step> {
    return this._http
      .put<Step>(`${this.url}/${id}`, { ...step })
      .pipe(pluck("data"));
  }

  deleteStep(id: string) {
    return this._http.delete(`${this.url}/${id}`).pipe(pluck("data"));
  }

  validName(name: string) {
    const url = `${this.url}/valid?name=${name}`;
    return this._http.get(url).pipe(pluck("data"));
  }
}
