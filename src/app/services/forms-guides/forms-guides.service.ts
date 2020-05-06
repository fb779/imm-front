import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, pluck } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Process } from '../../models/Process';

@Injectable({
  providedIn: 'root'
})
export class FormsGuidesService {

  constructor(private _http: HttpClient) { }

  getForsGuides(process: Process, type: string) {
    const url = `${environment.api_url}/forms-guides/${process._id}/${type}`;

    return this._http.get(url).pipe(
      pluck('list'),
      // tap(console.log),
    );
  }

  deleteFormGuide(id_form_guide) {
    const url = `${environment.api_url}/forms-guides/${id_form_guide}`;

    return this._http.delete(url).pipe();
  }
}
