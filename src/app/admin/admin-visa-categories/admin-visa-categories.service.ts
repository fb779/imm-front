import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { pluck, shareReplay } from "rxjs/operators";
import { Category } from "../../models/Category";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminVisaCategoriesService {
  constructor(private _http: HttpClient) {}

  getListVisaCategories(): Observable<Category[]> {
    const url = `${environment.api_url}${environment.api_version}/visa-category`;

    return this._http
      .get<Category[]>(url)
      .pipe(pluck("list"), shareReplay<Category[]>());
  }

  getVisaCategory(id: string) {
    const url = `${environment.api_url}${environment.api_version}/visa-category/${id}`;

    return this._http.get(url).pipe(pluck("visa"));
  }

  createCategory(visa: Category) {
    const url = `${environment.api_url}${environment.api_version}/visa-category`;

    return this._http.post(url, visa).pipe();
  }

  editCategory(id: string, visa: Category) {
    const url = `${environment.api_url}${environment.api_version}/visa-category/${id}`;

    return this._http.put(url, visa).pipe();
  }

  validName(name: string) {
    const url = `${environment.api_url}${environment.api_version}/visa-category/valid-name/${name}`;

    return this._http.get(url).pipe(pluck("data"));
  }
}
