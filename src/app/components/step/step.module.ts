import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepDialogComponent } from "./step-dialog/step-dialog.component";
import { StepShowLineComponent } from "./step-show-line/step-show-line.component";
import { StepButtonComponent } from "./step-button/step-button.component";

import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbSpinnerModule,
} from "@nebular/theme";

const stepNebular = [
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbSpinnerModule,
];

@NgModule({
  declarations: [
    StepDialogComponent,
    StepShowLineComponent,
    StepButtonComponent,
  ],
  imports: [CommonModule, ...stepNebular],
  exports: [StepButtonComponent, StepShowLineComponent],
  entryComponents: [StepDialogComponent],
})
export class StepModule {}
