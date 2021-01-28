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
import { nocList, INoc } from "../../mocks/noc-list";
import { IOption, IOptionNumber } from "../../models/Option";

@Injectable({
  providedIn: "root",
})
export class AssessmentFormService {
  constructor(private _http: HttpClient) {}

  getAccompanying(): Observable<IOptionNumber[]> {
    return observableOf(opsAccompanying);
  }

  getAges(): Observable<IOptionNumber[]> {
    return observableOf(opsAges);
  }

  getRelationships(): Observable<IOption[]> {
    return observableOf(opsRelationships);
  }

  getTitles(): Observable<Title[]> {
    return observableOf(opsTitles);
  }

  getSex(): Observable<IOption[]> {
    return observableOf(opsSex);
  }

  getYesNo(): Observable<IOption[]> {
    return observableOf(opsYesNo);
  }

  getCountries(): Observable<Country[]> {
    return observableOf(opsCountries);
  }

  getStatus(): Observable<IOption[]> {
    return observableOf(opsStatus);
  }

  getProvinces(): Observable<IOption[]> {
    return observableOf(opsProvinces);
  }

  getMaritalStatus(): Observable<IOption[]> {
    return observableOf(opsMaritalStatus);
  }

  getPropousVisit(): Observable<IOption[]> {
    return observableOf(opsPropousVisit);
  }

  getStayCanada(): Observable<IOption[]> {
    return observableOf(opsStayCanada);
  }

  getLevelEducation(): Observable<IOption[]> {
    return observableOf(opsLevelEducation);
  }

  getYearsEducation(): Observable<IOption[]> {
    return observableOf(opsYearsEducation);
  }

  getNocList(term: string = ""): Observable<IOption[]> {
    const nocFiltered = term
      ? nocList.filter(({ code, name, type }: INoc) => {
          return (
            code.includes(term) ||
            name.toLocaleLowerCase().includes(term.toLowerCase()) ||
            type.includes(term)
          );
        })
      : nocList;

    return observableOf(
      nocFiltered.map(
        ({ code, name }: INoc): IOption => ({ value: code, name })
      )
    );
  }
}
