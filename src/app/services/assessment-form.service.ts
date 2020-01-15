import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

import { opsTitles } from '../mocks/titles';
import { Title } from '../models/Titlel';

@Injectable({
  providedIn: 'root'
})
export class AssessmentFormService {

  titles: Title[] = [];
  sex: {}[] = [];

  constructor() { }

  getTitles(): Observable<Title[]>{
    this.titles = opsTitles;
    return observableOf(this.titles);
  }

  getSex(): Observable<{}[]>{
    return observableOf(this.sex);
  }
}
