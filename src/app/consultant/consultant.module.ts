import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ConsultantRoutingModule } from "./consultant-routing.module";

import { ThemeModule } from "../@theme/theme.module";
import {
  NbMenuModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbListModule,
  NbTabsetModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
  NbSpinnerModule,
  NbAccordionModule,
} from "@nebular/theme";

const consultanttNebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
  NbTabsetModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbAccordionModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

import { ConsultantComponent } from "./consultant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProcessesComponent } from "./processes/processes.component";
import { ProcessComponent } from "./processes/process.component";
import { FormsGuidesComponent } from "./forms-guides/forms-guides.component";
import { SelectDocumentsComponent } from "./select-documents/select-documents.component";
import { SharedModule } from "../shared/shared.module";
import { ChecklistComponent } from './select-documents/checklist/checklist.component';
import { DocumentsComponent } from './documents/documents.component';
import { ListDocumentsComponent } from './documents/list-documents/list-documents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultantRoutingModule,
    SharedModule,
    ...consultanttNebular,
  ],
  declarations: [
    ConsultantComponent,
    DashboardComponent,
    ProcessesComponent,
    ProcessComponent,
    FormsGuidesComponent,
    SelectDocumentsComponent,
    ChecklistComponent,
    DocumentsComponent,
    ListDocumentsComponent,
  ],
  exports: [],
})
export class ConsultantModule { }
