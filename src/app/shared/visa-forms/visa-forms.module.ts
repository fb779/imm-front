import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbCheckboxModule,
  NbStepperModule,
  NbDatepickerModule,
  NbIconModule,
  NbListModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbAlertModule,
} from "@nebular/theme";

const nebular = [
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  NbStepperModule,
  // NbListModule,
  // NbAccordionModule,
  // NbSpinnerModule,
  // NbAlertModule,
];

import { VisaFormsComponent } from "./visa-forms.component";
import { VisitorComponent } from "./visitor/visitor.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FamilyModule } from "../../components/family/family.module";
import { ExpressEntryComponent } from "./express-entry/express-entry.component";
import { WorkPermitComponent } from "./work-permit/work-permit.component";

@NgModule({
  declarations: [
    VisaFormsComponent,
    VisitorComponent,
    ExpressEntryComponent,
    WorkPermitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    FamilyModule,
  ],
  exports: [VisaFormsComponent],
})
export class VisaFormsModule {}
