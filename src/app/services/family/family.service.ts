import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, pluck, filter } from 'rxjs/operators';

import { Process } from '../../models/Process';
import { environment } from '../../../environments/environment';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor( private _http: HttpClient) { }

  getFamilyProcesses( process: Process): Observable<any>{
    let url = `${ environment.api_url }/family/${ process._id }`;

    return this._http.get( url ).pipe(
      pluck('list'),
      map( (x:any) => {
        return x.map( ({client}) => ({...client}) );
      }),
      // tap( x => console.log('familiares recibidos', x) ),
      // map(({_id, client, relationship})=>({ _id, ...client, relationship })),
      // map( (data) => data.list )
    );
  }

  newFamilyMember( process: Process, client: Client): Observable<any>{
    delete client._id;

    let url = `${ environment.api_url }/family/${ process._id }`;

    return this._http.post( url, client ).pipe(
      // tap( x => console.log('new member create', x) ),
      map<any,any>( ({ok, member}) => ({ok, member}) )
    );

  }

  editFamilyMember( process: Process, client: Client): Observable<any>{
    let url = `${ environment.api_url }/family/${ process._id }`;

    return this._http.put( url, client ).pipe(
      map<any,any>( ({ok, familyMember}) => ({ok, familyMember}) )
    );

  }

  removeFamiliMember( process: Process, client: Client): Observable<any>{
    const url = `${ environment.api_url }/family/${ process._id }/${ client._id }`;

    return this._http.delete( url ).pipe(
      // map( (data) => data.list )
    );

  }

}
