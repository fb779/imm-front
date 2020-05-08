import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbSpinnerModule,
  NbMenuModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbStepperModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
} from '@nebular/theme';

import { DocumentsComponent } from './documents.component';
import { SharedModule } from '../../shared/shared.module';

const nebular = [
  ThemeModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbSpinnerModule,
  // NbMenuModule,
  // NbStepperModule,
  // NbInputModule,
  // NbSelectModule,
  // NbDatepickerModule,
  // NbCheckboxModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    SharedModule
  ],
  declarations: [
    DocumentsComponent,
  ],
  exports: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
