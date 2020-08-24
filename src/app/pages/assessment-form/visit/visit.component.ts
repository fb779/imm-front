import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserProcessService } from "../../../services/services.index";

@Component({
  selector: "ngx-visit",
  templateUrl: "./visit.component.html",
  styleUrls: ["./visit.component.scss"],
})
export class VisitComponent implements OnInit {
  id: string;
  process: any;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _porcessServices: UserProcessService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit() {
    this._porcessServices.getUserProcess(this.id).subscribe((process) => {
      this.process = process;
    });
  }
}
