import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, pluck } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Process } from "../../models/Process";
import { FormsGuides } from "../../models/FormsGuides";
import { ToastrService } from "../toastr/toastr.service";

@Injectable({
  providedIn: "root",
})
export class FormsGuidesService {
  public spinner = false;

  constructor(private _http: HttpClient, private _toastr: ToastrService) {}

  getFormsGuides(process: Process, type: string) {
    const url = `${environment.api_url}${environment.api_version}/forms-guides/${process._id}/${type}`;

    this.spinner = true;
    return this._http.get(url).pipe(
      tap(() => (this.spinner = false)),
      pluck("list")
    );
  }

  getFormsGuidesByClient(id_client: string) {
    const url = `${environment.api_url}${environment.api_version}/forms-guides/client/${id_client}`;

    this.spinner = true;
    return this._http.get(url).pipe(
      tap(() => (this.spinner = false)),
      pluck("list")
    );
  }

  getFormGuideById(id_form_guide: string): Observable<FormsGuides> {
    const url = `${environment.api_url}${environment.api_version}/forms-guides/${id_form_guide}`;
    this.spinner = true;
    return this._http.get(url).pipe(
      tap(() => (this.spinner = false)),
      pluck("data")
    );
  }

  deleteFormGuide(id_form_guide) {
    const url = `${environment.api_url}${environment.api_version}/forms-guides/${id_form_guide}`;

    this.spinner = true;
    return this._http.delete(url).pipe(tap(() => (this.spinner = false)));
  }

  getFormGuideFile(form_guide: FormsGuides) {
    const url = `${environment.api_url}${environment.api_version}/files/${form_guide.process}/${form_guide.type}/${form_guide.name}`;

    this.spinner = true;
    this._http
      .get(url, { responseType: "blob" })
      .pipe(tap(() => (this.spinner = false)))
      .subscribe(
        (res) => this.downloadFile(res, form_guide.name),
        // enc aso de que la descarga falle por alguna razon se presenta mensaje de error al usuario
        (err) =>
          this._toastr.toastrDownload(
            `The file doesn't exist`,
            "Download File",
            "danger",
            "alert-triangle-outline"
          )
      );
  }

  downloadFile(blob: Blob, name: string) {
    const urlDownload = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = urlDownload;
    link.download = name;
    link.click();
    window.URL.revokeObjectURL(urlDownload);
    this._toastr.toastrDownload(
      "File download success",
      "Download File",
      "success",
      "done-all-outline"
    );
    // window.open(window.URL.createObjectURL(res));
  }
}
