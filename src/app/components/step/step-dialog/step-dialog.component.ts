import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { ProcessStep, statusValues } from "../../../models/ProcessStep.model";
import { ProcessStepService } from "../process-step.service";

@Component({
  selector: "ngx-step-dialog",
  templateUrl: "./step-dialog.component.html",
  styleUrls: ["./step-dialog.component.scss"],
})
export class StepDialogComponent implements OnInit {
  @Input("steps") steps: ProcessStep[];
  stValues: string[];

  constructor(
    private dialogRef: NbDialogRef<StepDialogComponent>,
    private processStepService: ProcessStepService
  ) {
    this.stValues = Object.values(statusValues);
  }

  ngOnInit() {}

  save(step: ProcessStep) {
    this.processStepService
      .setStatusStep(step._id, step.status)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
