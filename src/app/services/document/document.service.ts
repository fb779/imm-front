import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tap, pluck, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Client } from '../../models/Client';
import { Document } from '../../models/Document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private _http: HttpClient) { }

  getDocumentsByClient(client: Client): Observable<Document[]> {
    const url = `${environment.api_url}/documents/${client._id}`;

    return this._http.get(url).pipe(
      // tap(console.log),
      pluck('list'),
      // map((el: any) => el.map(x => {
      //   if (x._id == "5eab4a882d374b35ee9c8f95") {
      //     x.status = 'LOADED';
      //   }

      //   return x;
      // })),
      // tap(console.log),
    );
  }

}
