import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';

import { Title } from '../../models/Titlel';
import { Country } from '../../models/Country';

import {
  opsRelationships,
  opsTitles,
  opsSex,
  opsYesNo,
  opsCountries,
  opsStatus,
  opsProvinces,
  opsMaritalStatus,
  opsPropousVisit,
  opsStayCanada
} from '../../mocks/titles';


@Injectable({
  providedIn: 'root'
})
export class AssessmentFormService {
  relationships: any[] = [];
  titles: Title[] = [];
  sex = [];
  yesNo =[];
  countries: Country[]=[];
  status =[];
  provinces =[];
  maritalStatus =[];
  propousVisit =[];
  stayCanada =[];

  constructor( private _http: HttpClient) { }

  getRelationships(): Observable<any[]>{
    this.relationships = opsRelationships;
    return observableOf(this.relationships)
  }

  getTitles(): Observable<Title[]>{
    this.titles = opsTitles;
    return observableOf(this.titles);
  }

  getSex(): Observable<any[]>{
    this.sex = opsSex;
    return observableOf(this.sex);
  }

  getYesNo(): Observable<any[]>{
    this.yesNo = opsYesNo;
    return observableOf(this.yesNo);
  }

  getCountries(): Observable<Country[]>{
    this.countries = opsCountries;
    return observableOf(this.countries);
  }

  getStatus(): Observable<any[]>{
    this.status = opsStatus;
    return observableOf(this.status);
  }

  getProvinces(): Observable<any[]>{
    this.provinces = opsProvinces;
    return observableOf(this.provinces);
  }

  getMaritalStatus(): Observable<any[]>{
    this.maritalStatus = opsMaritalStatus;
    return observableOf(this.maritalStatus);
  }

  getPropousVisit(): Observable<any[]>{
    this.propousVisit = opsPropousVisit;
    return observableOf(this.propousVisit);
  }

  getStayCanada(): Observable<any[]>{
    this.stayCanada = opsStayCanada;
    return observableOf(this.stayCanada);
  }
}
