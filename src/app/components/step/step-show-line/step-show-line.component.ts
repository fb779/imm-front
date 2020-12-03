import { Component, Input, OnInit } from "@angular/core";
import { ProcessStep, statusValues } from "../../../models/ProcessStep.model";

@Component({
  selector: "ngx-step-show-line",
  templateUrl: "./step-show-line.component.html",
  styleUrls: ["./step-show-line.component.scss"],
})
export class StepShowLineComponent implements OnInit {
  @Input("steps") steps: ProcessStep[];
  stValues = statusValues;

  constructor() {}

  ngOnInit() {}
}
