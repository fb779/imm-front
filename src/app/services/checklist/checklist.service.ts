import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, pluck, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Client } from '../../models/Client';
import { Document } from '../../models/Document';
import { CheckList } from '../../models/CheckList';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  private documents: Document[] = [
    {
      "_id": "5e947f1e209cc0121bf65ee7",
      "checklist": "",
      "client": "",
      "name": "",
      "description": "",
      "extension": "",
      "directory": "",
      "status": ""
    }
  ];


  constructor(private _http: HttpClient) { }

  getDocumentsByClient(id_client: string): Observable<any> {
    // return of(this.documents);
    const url = `${environment.api_url}/documents/${id_client}`;
    return this._http.get(url).pipe(
      pluck('list'),
      // tap(console.log),
      map((x: any) => x.map(el => el.checklist))
    );
  }

  saveDocumentsByClient(client: Client, list: any): Observable<any> {
    const url = `${environment.api_url}/documents/${client._id}`;
    return this._http.post(url, { documents: list.join(',') }).pipe(

    );
  }

}
