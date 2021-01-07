import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ThemeModule } from '../../@theme/theme.module';
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
  NbListModule
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { AssessmentFormRoutingModule } from './assessment-form-routing.module';
import { AssessmentFormComponent } from './assessment-form.component';
import { VisitComponent } from './visit/visit.component';
import { StudyComponent } from './study/study.component';
import { SkilledWorkerComponent } from './skilled-worker/skilled-worker.component';
import { WorkPermitComponent } from './work-permit/work-permit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AssessmentFormComponent,
    VisitComponent,
    StudyComponent,
    SkilledWorkerComponent,
    WorkPermitComponent,
    DashboardComponent,
    FormsComponent,
  ],
  exports: [
    AssessmentFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    AssessmentFormRoutingModule,
  ]
})
export class AssessmentFormModule { }
