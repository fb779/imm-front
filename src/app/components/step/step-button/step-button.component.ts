import { Component, OnInit, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { StepDialogComponent } from "../step-dialog/step-dialog.component";
import { ProcessStep } from "../../../models/ProcessStep.model";

@Component({
  selector: "ngx-step-button",
  templateUrl: "./step-button.component.html",
  styleUrls: ["./step-button.component.scss"],
})
export class StepButtonComponent implements OnInit {
  @Input("steps") steps: ProcessStep[];
  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {
    console.log("Pasos cargados", this.steps);
  }

  openDialog() {
    this.dialogService.open(StepDialogComponent, {
      context: {
        steps: this.steps,
      },
    });
  }
}
