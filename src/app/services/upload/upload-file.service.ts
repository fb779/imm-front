import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { Process } from "../../models/Process";
import { Client } from "../../models/Client";
import { environment } from "../../../environments/environment";
import { Document } from "../../models/Document";

@Injectable({
  providedIn: "root",
})
export class UploadFileService {
  constructor(private _http: HttpClient) {}

  uploadFormsGuides(
    file: File,
    type_upload: string,
    process: Process,
    description: string
  ) {
    const url = `${environment.api_url}${environment.api_version}/upload/forms-guides/${process._id}`;

    var form_data: FormData = new FormData();
    form_data.append("form", file);
    form_data.append("type_document", type_upload);
    form_data.append("description", description);

    return this._http
      .post(url, form_data)
      .pipe
      // tap(console.log),
      // catchError((err) => of({}))
      ();
  }

  uploadDocument(file: File, id_document: string) {
    const url = `${environment.api_url}${environment.api_version}/upload/documents/${id_document}`;

    var form_data: FormData = new FormData();
    form_data.append("document", file);
    // form_data.append('type_document', type_upload);
    // form_data.append('description', description);

    return this._http
      .post(url, form_data)
      .pipe
      // tap(console.log),
      // catchError((err) => of({}))
      ();
  }
}
