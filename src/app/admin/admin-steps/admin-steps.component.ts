import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { StepFormComponent } from "./step-form/step-form.component";
import { AdminVisaCategoriesService } from "../admin-visa-categories/admin-visa-categories.service";
import { map } from "rxjs/operators";
import { Step } from "../../models/Step.model";
import { StepDeleteComponent } from "./step-delete/step-delete.component";
import { StepService } from "./step.service";
import { Observable } from "rxjs";
import { visa_categories } from "../../config/config";

@Component({
  selector: "ngx-admin-steps",
  templateUrl: "./admin-steps.component.html",
  styleUrls: ["./admin-steps.component.scss"],
})
export class AdminStepsComponent implements OnInit {
  visaCategoryList: any = [];
  stepList: Step[] = [];

  constructor(
    private dialogService: NbDialogService,
    private _visaCategories: AdminVisaCategoriesService,
    private _stepService: StepService
  ) {}

  ngOnInit() {
    this._visaCategories
      .getListVisaCategories()
      .pipe(
        map((el) =>
          el
            .filter((el) => el.active)
            .map(({ _id: value, name }) => ({ value, name }))
        )
      )
      .subscribe((res) => {
        this.visaCategoryList = res;
      });

    this.loadData();
  }

  loadData() {
    this._stepService.getStepList().subscribe((data) => (this.stepList = data));
  }

  newStep() {
    this.dialogService
      .open(StepFormComponent, {
        context: {
          visaList: this.visaCategoryList,
        },
      })
      .onClose.subscribe(() => {
        this.loadData();
      });
  }

  editStep(step: Step) {
    this.dialogService
      .open(StepFormComponent, {
        context: {
          step,
          visaList: this.visaCategoryList,
        },
      })
      .onClose.subscribe(() => {
        this.loadData();
      });
  }

  deleteStep(step: Step) {
    this.dialogService
      .open(StepDeleteComponent, {
        context: {
          step,
        },
      })
      .onClose.subscribe(() => {
        this.loadData();
      });
  }
}
