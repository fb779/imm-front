import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbCheckboxModule,
  NbStepperModule,
  NbListModule,
  NbDatepickerModule,
} from "@nebular/theme";

const nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  NbStepperModule,
  NbListModule,
];

import { AssessmentFormRoutingModule } from "./assessment-form-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { VisaFormsModule } from "../../shared/visa-forms/visa-forms.module";
import { AssessmentFormComponent } from "./assessment-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsComponent } from "./forms/forms.component";

@NgModule({
  declarations: [AssessmentFormComponent, DashboardComponent, FormsComponent],
  exports: [AssessmentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssessmentFormRoutingModule,
    ...nebular,
    SharedModule,
    VisaFormsModule,
  ],
})
export class AssessmentFormModule {}
