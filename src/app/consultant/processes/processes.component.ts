import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConsultantService } from "../../services/services.index";

@Component({
  selector: "ngx-processes",
  templateUrl: "./processes.component.html",
  styleUrls: ["./processes.component.scss"],
})
export class ProcessesComponent implements OnInit {
  processes = [];

  constructor(
    private _route: Router,
    private _consultantService: ConsultantService
  ) {}

  ngOnInit() {
    this._consultantService.getConsultantProcesses().subscribe((res) => {
      this.processes = res;
    });
  }

  select(process) {
    this._route.navigate(["consultant", "processes", process._id]);
  }
}
