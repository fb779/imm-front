import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
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
  NbActionsModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule,
  NbAccordionModule,
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
  NbListModule,
  NbAccordionModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { VisitorComponent } from "./forms/visitor/visitor.component";
import { TuristComponent } from "./forms/turist/turist.component";
import { FamilyFormComponent } from "./forms/family-form/family-form.component";

@NgModule({
  declarations: [
    VisitorComponent,
    TuristComponent,
    FamilyFormComponent
  ],
  exports: [
    CommonModule,
    VisitorComponent,
    TuristComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ...nebular
  ],
})
export class SharedModule {}
