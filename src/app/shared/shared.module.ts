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
  NbIconModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
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
  NbSpinnerModule
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { VisitorComponent } from "./forms/visitor/visitor.component";
import { TuristComponent } from "./forms/turist/turist.component";
import { FamilyFormComponent } from "./forms/family-form/family-form.component";
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [
    VisitorComponent,
    TuristComponent,
    FamilyFormComponent,
    UploadFileComponent

  ],
  exports: [
    CommonModule,
    VisitorComponent,
    TuristComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular
  ],
})
export class SharedModule { }
