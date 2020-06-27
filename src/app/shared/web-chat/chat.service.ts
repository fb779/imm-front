import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { switchMap, pluck, map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { UserService } from "../../services/services.index";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private processBS = new BehaviorSubject("");

  process$ = this.processBS.asObservable();

  listMessages$ = this.process$.pipe(
    switchMap((id_process) =>
      this._http.get(
        `${environment.api_url}${environment.api_version}/chat/${id_process}`
      )
    ),
    pluck("data"),
    map((data: any) => {
      return data.map((x: any) => {
        x["status"] = "primary";
        x.date = moment(x.date).format("YYYY-MM-DD HH:mm:ss").toString();
        if (x.user.role === this._userService.user.role) {
          x["status"] = "success";
        }
        return x;
      });
    })
  );

  constructor(private _http: HttpClient, private _userService: UserService) {}

  loadProcess(id_process: string) {
    this.processBS.next(id_process);
  }

  setMessage(data: any) {
    const url = `${environment.api_url}${environment.api_version}/chat`;
    return this._http.post(url, data);
  }
}
