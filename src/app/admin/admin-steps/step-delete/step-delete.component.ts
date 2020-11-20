import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { Step } from "../../../models/Step.model";
import { StepService } from "../step.service";
import { ToastrService } from "../../../services/toastr/toastr.service";

@Component({
  selector: "ngx-step-delete",
  templateUrl: "./step-delete.component.html",
  styleUrls: ["./step-delete.component.scss"],
})
export class StepDeleteComponent implements OnInit {
  @Input("step") step: Step;

  constructor(
    protected ref: NbDialogRef<StepDeleteComponent>,
    private _toastr: ToastrService,
    private _stepService: StepService
  ) {}

  ngOnInit() {}

  cancel() {
    this.ref.close();
  }

  deleteStep() {
    this._stepService.deleteStep(this.step._id).subscribe((step) => {
      this._toastr.toastrGenericMessage(
        "Delete step is successfull",
        "Step",
        "success"
      );
      this.ref.close(step);
    });
  }
}
