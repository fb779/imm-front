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

  constructor(private _http: HttpClient) { }

  getDocumentsByClient(id_client: string): Observable<any> {
    const url = `${environment.api_url}/documents/${id_client}`;
    return this._http.get(url).pipe(
      pluck('list'),
      // tap(console.log),
      map((x: any) => x.map(el => el.checklist))
    );
  }

  getDocumentsByProcessClient(id_process: string, id_client: string): Observable<any> {
    const url = `${environment.api_url}/documents/${id_process}/${id_client}`;
    return this._http.get(url).pipe(
      pluck('list'),
      // tap(console.log),
      map((x: any) => x.map(el => el.checklist))
    );
  }

  saveDocumentsByClient(id_process: string, id_client: string, list: any): Observable<any> {
    const url = `${environment.api_url}/documents/${id_client}`;
    return this._http.post(url, { id_process, list_checks: list.join(',') }).pipe(

    );
  }

}
