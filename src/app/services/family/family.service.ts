import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject, Subject, combineLatest } from "rxjs";
import { map, tap, pluck, filter, switchMap } from "rxjs/operators";

import { Process } from "../../models/Process";
import { environment } from "../../../environments/environment";
import { Client } from "../../models/Client";

@Injectable({
  providedIn: "root",
})
export class FamilyService {
  // private processBS = new Subject();
  private processBS = new BehaviorSubject("");
  private numberFamilyMembersBS = new BehaviorSubject(0);

  process$ = this.processBS.asObservable();

  listFamilyMembers$ = this.process$.pipe(
    switchMap((process_id) =>
      this._http.get(
        `${environment.api_url}${environment.api_version}/family/${process_id}`
      )
    ),
    pluck("list"),
    // tap((x: any) => {
    //   console.warn("cantidad de mienbros de la familia", x);
    //   this.numberFamilyMembersBS.next(parseInt(x.length));
    //   // this.numberFamilyMembers = parseInt(x.length);
    // }),
    map((x: any) => {
      return x.map(({ client }) => ({ ...client }));
    })
  );

  numberFamilyMembers$ = this.listFamilyMembers$.pipe(
    map((el) => parseInt(el.length))
  );

  // numberFamilyMembers$ = combineLatest(
  //   this.listFamilyMembers$
  // ).pipe(
  //   map( x => x.length )
  // );

  constructor(private _http: HttpClient) {}

  chageProcess(id_process: string) {
    this.processBS.next(id_process);
  }

  // numberFamilyMembers() {
  //   this.numberFamilyMembers$;
  // }

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

  removeFamiliMember(process: Process, client: Client): Observable<any> {
    const url = `${environment.api_url}${environment.api_version}/family/${process._id}/${client._id}`;

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
}
