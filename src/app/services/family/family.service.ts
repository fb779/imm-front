import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, tap, pluck, switchMap } from "rxjs/operators";

import { Process } from "../../models/Process";
import { environment } from "../../../environments/environment";
import { Client } from "../../models/Client";
// import { ProcessConsultantService } from "../../consultant/process-consultant.service";

@Injectable({
  providedIn: "root",
})
export class FamilyService {
  private processBS: BehaviorSubject<any> = new BehaviorSubject<any>("");
  private clientBS: BehaviorSubject<Client> = new BehaviorSubject<Client>(null);

  process$ = this.processBS.asObservable();
  client$ = this.clientBS.asObservable();

  // listado de miembros de familia por proceso
  listFamilyMembers$ = this.process$.pipe(
    switchMap((process_id) =>
      this._http.get(
        `${environment.api_url}${environment.api_version}/family/${process_id}`
      )
    ),
    pluck("list"),
    map((x: any) => x.map(({ client }) => ({ ...client })))
  );

  // listado de miembros de familia por usuario
  listFamilyUser$ = this.process$.pipe(
    switchMap((process_id) =>
      this._http.get(
        `${environment.api_url}${environment.api_version}/family/user/${process_id}`
      )
    ),
    pluck("data"),
    map((x: any) => {
      return x.map((client) => ({ ...client, ["checked"]: false }));
    })
  );

  numberFamilyMembers$ = this.listFamilyMembers$.pipe(
    map((dt) => parseInt(dt.length) - 1)
  );

  constructor(private _http: HttpClient) {}

  chageProcess(id_process: string) {
    this.processBS.next(id_process);
  }

  loadEditClient(client: Client) {
    this.clientBS.next(client);
  }

  newFamilyMember(process: Process, client: Client): Observable<any> {
    delete client._id;

    let url = `${environment.api_url}${environment.api_version}/family/${process._id}`;

    return this._http.post(url, client).pipe(
      tap(() => this.processBS.next(process._id)),
      map<any, any>(({ ok, member }) => ({ ok, member }))
    );
  }

  editFamilyMember(process: Process, client: Client): Observable<any> {
    let url = `${environment.api_url}${environment.api_version}/family/${process._id}`;

    return this._http.put(url, client).pipe(
      tap(() => this.processBS.next(process._id)),
      map<any, any>(({ ok, familyMember }) => ({ ok, familyMember }))
    );
  }

  removeFamilyMember(process: Process, client: Client): Observable<any> {
    const url = `${environment.api_url}${environment.api_version}/family/${client._id}`;

    return this._http
      .delete(url)
      .pipe(tap(() => this.processBS.next(process._id)));
  }

  getDocumentsOfMember(process: Process, client: Client) {
    const url = `${environment.api_url}${environment.api_version}/documents/${process._id}/${client._id}`;
    return this._http.get(url).pipe();
  }

  getFamilyMembersByClient(id_client: string): Observable<Client[]> {
    const url = `${environment.api_url}${environment.api_version}/family/client/${id_client}`;

    return this._http.get(url).pipe(pluck("list"));
  }

  addClientProcess(id_process, id_client) {
    const url = `${environment.api_url}${environment.api_version}/family/set`;

    const data = {
      client: id_client,
      process: id_process,
      action: "add",
    };

    return this._http
      .post(url, data)
      .pipe(tap(() => this.processBS.next(id_process)));
  }

  removeClientProcess(id_process, id_client) {
    const url = `${environment.api_url}${environment.api_version}/family/set`;

    const data = {
      client: id_client,
      process: id_process,
      action: "remove",
    };

    return this._http
      .post(url, data)
      .pipe(tap(() => this.processBS.next(id_process)));
  }
}
