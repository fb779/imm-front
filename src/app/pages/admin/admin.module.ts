import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbStepperModule,
  NbActionsModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule,
} from '@nebular/theme';

const nebular = [
  ThemeModule,
  NbMenuModule,
  // NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  NbStepperModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ...nebular
  ]
})
export class AdminModule { }
