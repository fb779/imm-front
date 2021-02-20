import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";
import { map, pluck, tap, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { CheckList } from "../../models/CheckList";

@Injectable({
  providedIn: "root",
})
export class ChecklistService {
  checkListBS: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}

  getDocumentsByClient(id_client: string): Observable<any> {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_client}`;
    return this._http.get(url).pipe(
      pluck("list"),
      map((x: any) => x.map((el) => el.checklist))
    );
  }

  getDocumentsByProcessClient(
    id_process: string,
    id_client: string
  ): Observable<any> {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_process}/${id_client}`;
    return this._http.get(url).pipe(
      pluck("list"),
      map((x: any) => x.map((el) => el.checklist))
    );
  }

  saveDocumentsByClient(
    id_process: string,
    id_client: string,
    list: any
  ): Observable<any> {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_client}`;
    return this._http
      .post(url, { id_process, list_checks: list.join(",") })
      .pipe();
  }

  getChecklistByType(type: string): Observable<CheckList[]> {
    const url = `${environment.api_url}${environment.api_version}/check-list?type=${type}`;

    return this._http.get(url).pipe(pluck("list"));
  }

  createCheckList(checklist: any) {
    const url = `${environment.api_url}${environment.api_version}/check-list`;

    checklist.visa_categories = [checklist.visa_categories];

    return this._http.post(url, checklist).pipe(catchError((err) => of(err)));
  }
}
