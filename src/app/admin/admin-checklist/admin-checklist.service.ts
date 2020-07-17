import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap, map, pluck } from "rxjs/operators";
import { CheckList } from "../../models/CheckList";
import { Category } from "../../models/Category";

@Injectable({
  providedIn: "root",
})
export class AdminChecklistService {
  constructor(private _http: HttpClient) {}

  getListChecklist() {
    const url = `${environment.api_url}${environment.api_version}/check-list?type=all`;

    return this._http.get(url).pipe(
      pluck("list"),
      map((list: CheckList[]) =>
        list.sort((a, b) => {
          if (a.group > b.group) {
            return -1;
          }
          if (a.group < b.group) {
            return 1;
          }
          // a must be equal to b
          return 0;
        })
      )
    );
  }

  getChecklist(id: string) {
    const url = `${environment.api_url}${environment.api_version}/check-list/${id}`;

    return this._http.get(url).pipe(pluck("check"));
  }

  getVisaCategories() {
    const url = `${environment.api_url}${environment.api_version}/visa-category`;

    return this._http.get(url).pipe(
      pluck("list"),
      map((el: any) => {
        return el.map(({ _id, name }) => ({ _id, name }));
      })
    );
  }

  validName(name: string) {
    const url = `${environment.api_url}${environment.api_version}/check-list/valid/${name}`;

    return this._http.get(url).pipe(pluck("data"));
  }

  createChecklist(checklist: CheckList) {
    const url = `${environment.api_url}${environment.api_version}/check-list`;

    return this._http.post(url, checklist).pipe();
  }

  updateChecklist(id: string, checklist: CheckList) {
    const url = `${environment.api_url}${environment.api_version}/check-list/${id}`;
    let data: any = { ...checklist };
    data.visa_categories = data.visa_categories.join();
    return this._http.put(url, checklist).pipe();
  }
}
