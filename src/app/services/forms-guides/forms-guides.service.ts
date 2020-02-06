import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';

import { documentsFomrsGuides } from '../../mocks/files';

@Injectable({
  providedIn: 'root'
})
export class FormsGuidesService {

  documents = [];

  constructor() { }

  getDocuments( id : string ) : Observable<any[]>{
    this.documents = documentsFomrsGuides;
    return observableOf(this.documents);
  }
}
