import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CheckList } from '../../models/CheckList';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor( private _http: HttpClient) { }

  // getConsultantProcesses(): Observable<Process[]>{}
  getConsultantProcesses(): Observable<any>{
    let url = `${ environment.api_url }/process`;

    return this._http.get( url ).pipe(
      // tap( x => console.log('recibido en el tap', x) ),
      map( (data:any) => data.list )
    );
  }

  getFormProcess( id: string ): Observable<any>{
    // return observableOf({});
    // console.log(id)
    let url = `${ environment.api_url }/process/${ id }/form`;
    return this._http.get( url ).pipe(
      // tap( x => console.log('recibido en el tap',x) )
    );
  }

  // getDocumentsOfConsultant( type: string ): Observable<Document[]>{
  getDocumentsOfConsultant( type: string ): Observable<CheckList[]>{
    const url = `${ environment.api_url }/check-list?type=${type}`;

    return this._http.get( url ).pipe(
      // map( ({ list }: any)=> ({ list }) ),
      pluck( 'list' ),
      // tap( console.log ),
    )
  }
}
