import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  UserProcessService,
  FamilyService,
} from "../../services/services.index";
import { Process } from "../../models/Process";
import { status, visa_categories } from "../../config/config";
import { NbTabComponent } from "@nebular/theme";

@Component({
  selector: "ngx-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"],
})
export class ProcessComponent implements OnInit {
  loading = false;
  process: Process;
  id_process: string;
  message: string = "";
  type_visa: string = "";
  visa_categories = visa_categories;
  status = status;

  showMessage = true;
  tabTitleMessages = "Messages";

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _processServices: UserProcessService,
    private _familyServices: FamilyService
  ) {
    this.loading = true;
    this._activatedRoute.params.subscribe((params) => {
      this.process = null;
      this.type_visa = "";
      this.id_process = params["id"];
      this._processServices.getUserProcess(this.id_process).subscribe(
        (resp: any) => {
          this.process = resp;
          this.type_visa = this.process.visa_category.name;
          this._familyServices.chageProcess(this.id_process);
          this.loading = false;
        },
        (err) => {
          this.message = err.message ? err.message : err.data.message;
          this.loading = false;
        }
      );
    });
  }

  ngOnInit() {}

  displayMessage(ev: NbTabComponent) {
    console.log("activamos la mensajeria", ev.tabTitle);
    ev.tabTitle == this.tabTitleMessages && ev.active
      ? (this.showMessage = true)
      : (this.showMessage = false);
  }
}
