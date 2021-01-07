import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { pluck, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Document } from "../../models/Document";

import { documentStatus } from "../../config/config";
import { ToastrService } from "../toastr/toastr.service";

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  constructor(private _http: HttpClient, private _toastr: ToastrService) {}

  getDocumentsByProcessClient(
    id_process: string,
    id_client: string
  ): Observable<Document[]> {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_process}/${id_client}`;

    return this._http.get(url).pipe(
      // tap((re) => console.log("documentso del proceso y el cliente", re)),
      pluck("list")
    );
  }

  getDocumentsByClient(id_client: string): Observable<Document[]> {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_client}`;

    return this._http.get(url).pipe(pluck("list"));
  }

  setApproveDocument(id_document: string) {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_document}`;

    const data = { status: documentStatus.approved };

    return this._http.put(url, data).pipe();
  }

  setRejectDocument(id_document: string, comment: string) {
    const url = `${environment.api_url}${environment.api_version}/documents/${id_document}`;

    const data = {
      status: documentStatus.rejected,
      comment,
    };

    return this._http.put(url, data).pipe();
  }

  getDocumentFile(document: Document) {
    const url = `${environment.api_url}${environment.api_version}/files/${document.process}/${document.client}/${document.file_name}`;

    this._http
      .get(url, { responseType: "blob" })
      .pipe
      // catchError( of(false))
      ()
      .subscribe(
        (res) => this.downloadFile(res, document.file_name), // descarga el archivo cuando existe.
        (err) => alert(`The file ${err.text}`) // enc aso de que la descarga falle por alguna razon se presenta mensaje de error al usuario
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
