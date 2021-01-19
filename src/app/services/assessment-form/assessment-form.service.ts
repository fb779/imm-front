import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of as observableOf, Observable } from "rxjs";

import { Title } from "../../models/Titlel";
import { Country } from "../../models/Country";

import {
  opsAccompanying,
  opsAges,
  opsRelationships,
  opsTitles,
  opsSex,
  opsYesNo,
  opsCountries,
  opsStatus,
  opsProvinces,
  opsMaritalStatus,
  opsPropousVisit,
  opsStayCanada,
  opsLevelEducation,
  opsYearsEducation,
} from "../../mocks/titles";

@Injectable({
  providedIn: "root",
})
export class AssessmentFormService {
  constructor(private _http: HttpClient) {}

  getAccompanying(): Observable<any[]> {
    return observableOf(opsAccompanying);
  }

  getAges(): Observable<any[]> {
    return observableOf(opsAges);
  }

  getRelationships(): Observable<any[]> {
    return observableOf(opsRelationships);
  }

  getTitles(): Observable<Title[]> {
    return observableOf(opsTitles);
  }

  getSex(): Observable<any[]> {
    return observableOf(opsSex);
  }

  getYesNo(): Observable<any[]> {
    return observableOf(opsYesNo);
  }

  getCountries(): Observable<Country[]> {
    return observableOf(opsCountries);
  }

  getStatus(): Observable<any[]> {
    return observableOf(opsStatus);
  }

  getProvinces(): Observable<any[]> {
    return observableOf(opsProvinces);
  }

  getMaritalStatus(): Observable<any[]> {
    return observableOf(opsMaritalStatus);
  }

  getPropousVisit(): Observable<any[]> {
    return observableOf(opsPropousVisit);
  }

  getStayCanada(): Observable<any[]> {
    return observableOf(opsStayCanada);
  }

  getLevelEducation(): Observable<any[]> {
    return observableOf(opsLevelEducation);
  }

  getYearsEducation(): Observable<any[]> {
    return observableOf(opsYearsEducation);
  }
}
