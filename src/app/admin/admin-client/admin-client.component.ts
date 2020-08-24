import { Component, OnInit } from "@angular/core";
import { AdminClientService } from "./admin-client.service";
import { User } from "../../models/User";

@Component({
  selector: "ngx-admin-client",
  templateUrl: "./admin-client.component.html",
  styleUrls: ["./admin-client.component.scss"],
})
export class AdminClientComponent implements OnInit {
  clients: User[] = [];

  constructor(private _adminClientService: AdminClientService) {
    this.loadClient();
  }

  ngOnInit() {}

  loadClient() {
    this._adminClientService.getClients().subscribe((users) => {
      this.clients = users;
    });
  }
}
