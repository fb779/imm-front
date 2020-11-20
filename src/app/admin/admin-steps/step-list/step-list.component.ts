import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Step } from "../../../models/Step.model";
import { StepService } from "../step.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "ngx-step-list",
  templateUrl: "./step-list.component.html",
  styleUrls: ["./step-list.component.scss"],
})
export class StepListComponent implements OnInit {
  // list: Step[];
  @Input("list") list: Step[] = [];
  @Output() editStep: EventEmitter<Step> = new EventEmitter<Step>();
  @Output() deleteStep: EventEmitter<Step> = new EventEmitter<Step>();

  constructor() {}

  ngOnInit() {}
}
