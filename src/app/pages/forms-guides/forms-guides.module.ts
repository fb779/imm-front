import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'

import { ThemeModule } from '../../@theme/theme.module';

import {
  NbMenuModule,
  NbCardModule,
  NbStepperModule,
  NbInputModule,
  NbSelectModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule
} from '@nebular/theme';

const nebularModules = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbStepperModule,
  NbButtonModule,
  // NbInputModule,
  // NbSelectModule,
  // NbActionsModule,
  // NbCheckboxModule,
  // NbDatepickerModule,
  // NbIconModule,
  // NbRadioModule,
  // NbUserModule
];

import { CardDocumentsComponent } from './card-documents/card-documents.component';
import { FormsComponent } from './forms/forms.component';
import { FormsGuidesRoutingModule } from './forms-guides-routing.module';
import { FormsGuidesComponent } from './forms-guides.component';

@NgModule({
  declarations: [
    CardDocumentsComponent,
    FormsGuidesComponent,
    FormsComponent
  ],
  exports: [
    FormsGuidesComponent
  ],
  imports: [
    FormsGuidesRoutingModule,
    CommonModule,
    ...nebularModules,
//
  ]
})
export class FormsGuidesModule { }