import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ThemeModule } from '../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
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

const nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  // NbInputModule,
  // NbSelectModule,
  // NbActionsModule,
  // NbButtonModule,
  // NbCheckboxModule,
  // NbDatepickerModule,
  // NbIconModule,
  // NbRadioModule,
  // NbUserModule
];

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ...nebular,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
  ],
})
export class AdminModule { }
