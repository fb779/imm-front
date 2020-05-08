import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject, Subject } from "rxjs";
import { map, tap, pluck, filter, switchMap } from "rxjs/operators";

import { Process } from "../../models/Process";
import { environment } from "../../../environments/environment";
import { Client } from '../../models/Client';

@Injectable({
  providedIn: "root",
})
export class FamilyService {
  // private processBS = new Subject();
  private processBS = new BehaviorSubject("");

  process$ = this.processBS.asObservable();

  listFamilyMembers$ = this.process$.pipe(
    switchMap((process_id) =>
      this._http.get(`${environment.api_url}/family/${process_id}`)
    ),
    pluck("list"),
    map((x: any) => {
      return x.map(({ client }) => ({ ...client }));
    })
  );

  constructor(private _http: HttpClient) { }

  chageProcess(process: Process) {
    this.processBS.next(process._id);
  }

  newFamilyMember(process: Process, client: Client): Observable<any> {
    delete client._id;

    let url = `${environment.api_url}/family/${process._id}`;

    return this._http.post(url, client).pipe(
      tap(() => this.processBS.next(process._id)),
      map<any, any>(({ ok, member }) => ({ ok, member }))
    );
  }

  editFamilyMember(process: Process, client: Client): Observable<any> {
    let url = `${environment.api_url}/family/${process._id}`;

    return this._http.put(url, client).pipe(
      tap(() => this.processBS.next(process._id)),
      map<any, any>(({ ok, familyMember }) => ({ ok, familyMember }))
    );
  }

  removeFamiliMember(process: Process, client: Client): Observable<any> {
    const url = `${environment.api_url}/family/${process._id}/${client._id}`;

    return this._http.delete(url).pipe(
      tap(() => this.processBS.next(process._id))
    );
  }

  getDocumentsOfMember(process: Process, client: Client) {
    const url = `${environment.api_url}/documents/${process._id}/${client._id}`;

    return this._http.get(url).pipe(
    );
  }
}
