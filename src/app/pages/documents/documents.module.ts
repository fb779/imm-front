import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import {
  NbCardModule,
  NbButtonModule,
  NbMenuModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbStepperModule,
  NbActionsModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule,
} from '@nebular/theme';

import { DocumentsComponent } from './documents.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


const nebular = [
  ThemeModule,
  // NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
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
  ],
  declarations: [
    DocumentsComponent,
    UploadFileComponent
  ],
  exports: [
    DocumentsComponent
  ]
})
export class DocumentsModule { }
