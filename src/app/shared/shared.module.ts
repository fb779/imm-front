import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './forms/visitor/visitor.component';
import { TuristComponent } from './forms/turist/turist.component';

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
} from '@nebular/theme';
import { FamilyFormComponent } from './family-form/family-form.component';

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
  NbListModule
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

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
    ...nebular,
  ]
})
export class SharedModule { }
