import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, combineLatest, Subject } from "rxjs";
import { pluck, tap, switchMap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { FamilyService, DocumentService } from "../services/services.index";
import { CheckList } from "../models/CheckList";

@Injectable({
  providedIn: "root",
})
export class ProcessConsultantService {
  private listDocumentsClientsBS: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  private typeVisaBS: BehaviorSubject<any> = new BehaviorSubject<any>("");

  typeVisa$ = this.typeVisaBS.asObservable();

  listClientProcess$ = this._familyService.listFamilyMembers$;

  listCheckList$ = this.typeVisa$.pipe(
    switchMap((typeVisa) => this.getChecklistByVisa(typeVisa))
  );

  // TODO: Cargar la lista de documentos por los clientes cargados en el proceso
  // listDocumentsClients$ = this.listDocumentsClientsBS.asObservable();
  listDocumentsClients$ = this._documentService.listDocumentsClients$;

  list$ = combineLatest([
    this.listClientProcess$,
    this.listCheckList$,
    this.listDocumentsClients$,
  ]).pipe(
    map(([listClient, listCheck, listDocuments]) =>
      [...listClient].map(({ _id, first_name, last_name }) => {
        const checkList = [...listCheck].map((el) => ({ ...el }));

        const listDocClient = [...listDocuments];
        listDocClient.length > 0 &&
          listDocClient
            .filter((doc) => doc.client === _id)
            .forEach(({ checklist: check }) => {
              const ind = checkList.findIndex((el) => el._id === check);
              if (ind >= 0) checkList[ind].required = true;
            });

        return {
          _id,
          first_name,
          last_name,
          checkList,
        };
      })
    )
  );

  constructor(
    private _http: HttpClient,
    private _familyService: FamilyService,
    private _documentService: DocumentService
  ) {}

  setTypeOfVisa(type: string) {
    this.typeVisaBS.next(type);
  }

  setProcess = (id_process) => this._documentService.setProcess(id_process);

  getChecklistByVisa(type: string): Observable<CheckList[]> {
    const url = `${environment.api_url}${environment.api_version}/check-list?type=${type}`;
    return this._http.get(url).pipe(pluck("list"));
  }
}
