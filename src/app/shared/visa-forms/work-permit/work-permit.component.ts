import { Component, Input, OnInit } from "@angular/core";
import { Process } from "../../../models/Process";

@Component({
  selector: "ngx-work-permit",
  templateUrl: "./work-permit.component.html",
  styleUrls: ["./work-permit.component.scss"],
})
export class WorkPermitComponent implements OnInit {
  @Input("process") process: Process;
  constructor() {}

  ngOnInit() {}
}
