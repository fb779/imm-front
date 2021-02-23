import { Component, OnInit } from "@angular/core";
import { NbAuthService } from "@nebular/auth";
import { Observable } from "rxjs";

import { ClientService } from "../../services/services.index";
import { Document } from "../../models/Document";
import { Client } from "../../models/Client";

@Component({
  selector: "ngx-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  user: any;

  client$: Observable<Client>;

  constructor(
    private _nbAuth: NbAuthService,
    private _clientServices: ClientService
  ) {
    this._nbAuth.getToken().subscribe((data: any) => {
      this.user = data.payload.user;
    });
  }

  ngOnInit() {
    this.client$ = this._clientServices.getClientById(this.user.client);
  }
}
