import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { UserProcessService } from "../../services/services.index";
import { Process } from "../../models/Process";

@Component({
  selector: "ngx-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnDestroy {
  private alive = true;
  processes: Process[] = [
    // {
    //   _id: "",
    //   status: "",
    //   active: true,
    //   client: {
    //     _id: "jsjsjs",
    //     first_name: "akdhakjshdka",
    //     last_name: "jjdjdjd",
    //   },
    //   visa_category: { _id: "wwww", name: "ksksksksks" },
    //   code: "",
    //   createdAt: "2020-06-26T21:04:55.481Z",
    // },
  ];

  constructor(
    private _router: Router,
    private _processServices: UserProcessService
  ) {
    this._processServices.getUserProcesses().subscribe((list_process) => {
      this.processes = list_process;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  navigateLink(link: string) {
    this._router.navigate([link]);
  }
}
