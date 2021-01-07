import { Component, OnInit } from "@angular/core";
import { UserProcessService } from "../../../services/services.index";
import { Router } from "@angular/router";
import { Process } from "../../../models/Process";
import { status, visaCategories } from "../../../config/config";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  processes: Process[] = [];
  status: any = status;

  constructor(
    private _router: Router,
    private _processServices: UserProcessService
  ) {
    this.getProcesses();
  }

  ngOnInit() {}

  getProcesses() {
    this._processServices.getUserProcesses().subscribe((dt: Process[]) => {
      this.processes = dt;
    });
  }

  goProcess(process: Process) {
    const {
      _id: id,
      visa_category: { name: visa },
    } = process;

    this._router.navigate([
      "/pages/assessment-form/",
      visa.replace(/\s/, "-").toLocaleLowerCase(),
      id,
    ]);

    // let routeForm = null;

    // switch (process.visa_category.name) {
    //   case visaCategories.visitor: {
    //     routeForm = 'visit';
    //   } break;

    //   case visaCategories.turist: {
    //     routeForm = 'turist';
    //   } break;

    //   case visaCategories.study: {
    //     routeForm = 'study';
    //   } break;
    // }

    // if (routeForm) {
    //   this._router.navigate(['/pages/assessment-form/', routeForm, process._id]);

    // }
  }
}
