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
  processes: Process[] = [];

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
