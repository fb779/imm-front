import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { visaCategories } from "../../../config/config";
import { UserProcessService } from "../../../services/services.index";
import { Process } from "../../../models/Process";

@Component({
  selector: "ngx-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  id: string;
  visa: string;
  process: any;

  vsCategories = visaCategories;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _processServices: UserProcessService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.visa = params["form"];
    });
  }

  ngOnInit() {
    this._processServices.getUserProcess(this.id).subscribe((process) => {
      // console.log("caraga del proceso", process);
      this.process = process;
    });
  }
}
