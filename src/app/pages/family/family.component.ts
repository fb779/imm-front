import { Component, OnInit } from "@angular/core";
import { Client } from "../../models/Client";
import { Observable } from "rxjs";
import { NbAuthService } from "@nebular/auth";
import { ClientService } from "../../services/services.index";
import { filter, tap, map } from "rxjs/operators";

@Component({
  selector: "ngx-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.scss"],
})
export class FamilyComponent implements OnInit {
  user;
  familyMembers$: Observable<Client[]>;

  constructor(
    private _nbAuthService: NbAuthService,
    private _clientService: ClientService
  ) {
    this._nbAuthService.getToken().subscribe((token) => {
      if (token.isValid()) {
        this.user = token.getPayload()["user"];
      }
    });
  }

  ngOnInit() {
    this.familyMembers$ = this._clientService
      .getClientByUser(this.user._id)
      .pipe(
        map((el) => {
          return el.filter((el) => el._id !== this.user.client);
        })
      );
  }
}
