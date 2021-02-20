import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  UserProcessService,
  FamilyService,
  DocumentService,
} from "../../services/services.index";
import { Process } from "../../models/Process";
import { status, visaCategories } from "../../config/config";
import { NbTabComponent } from "@nebular/theme";

@Component({
  selector: "ngx-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"],
})
export class ProcessComponent implements OnInit {
  id_process: string;
  loading = false;
  process: Process;
  message: String = "";
  status = status;
  vsCategories = visaCategories;

  showMessage = true;
  tabTitleMessages = "Messages";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _processServices: UserProcessService,
    private _familyServices: FamilyService
  ) {
    this.loading = true;
    this._activatedRoute.params.subscribe((params) => {
      this.process = null;
      this.id_process = params["id"];
      this.loadProcess();
    });
  }

  ngOnInit() {}

  loadProcess() {
    this._processServices.getUserProcess(this.id_process).subscribe(
      (resp: any) => {
        this.process = resp;
        this._familyServices.chageProcess(this.id_process);
        this.loading = false;
      },
      (err) => {
        this.message = err.message ? err.message : err.data.message;
        this.loading = false;
      }
    );
  }

  displayMessage(ev: NbTabComponent) {
    ev.tabTitle == this.tabTitleMessages && ev.active
      ? (this.showMessage = true)
      : (this.showMessage = false);
  }
}
