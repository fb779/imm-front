import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminStepsRoutingModule } from "./admin-steps-routing.module";
import { ThemeModule } from "../../@theme/theme.module";
import {
  NbCardModule,
  NbIconModule,
  NbDialogModule,
  NbButtonModule,
  NbBadgeModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
} from "@nebular/theme";

const nebular = [
  ThemeModule,
  NbCardModule,
  NbIconModule,
  NbDialogModule.forRoot(),
  NbButtonModule,
  NbBadgeModule,
  NbInputModule,
  NbSelectModule,
  // NbCheckboxModule,
];

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AdminStepsComponent } from "./admin-steps.component";
import { StepListComponent } from "./step-list/step-list.component";
import { StepFormComponent } from "./step-form/step-form.component";
import { StepDeleteComponent } from "./step-delete/step-delete.component";

@NgModule({
  declarations: [
    AdminStepsComponent,
    StepListComponent,
    StepFormComponent,
    StepDeleteComponent,
  ],
  imports: [
    CommonModule,
    AdminStepsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
  ],
  entryComponents: [StepFormComponent, StepDeleteComponent],
})
export class AdminStepsModule {}
