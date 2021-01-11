import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ConsultantRoutingModule } from "./consultant-routing.module";
import { ThemeModule } from "../@theme/theme.module";
import { SharedModule } from "../shared/shared.module";
import { WebChatModule } from "../shared/web-chat/web-chat.module";
import { AppointmentModule } from "../shared/appointment/appointment.module";
import { ProfileModule } from "../shared/profile/profile.module";
import { StepModule } from "../components/step/step.module";

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
  NbSpinnerModule,
  NbAccordionModule,
  NbDialogModule,
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
];

import { VisaFormsModule } from "../shared/visa-forms/visa-forms.module";

import { ConsultantComponent } from "./consultant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProcessesComponent } from "./processes/processes.component";
import { ProcessComponent } from "./processes/process.component";
import { FormsGuidesComponent } from "./forms-guides/forms-guides.component";
import { SelectDocumentsComponent } from "./select-documents/select-documents.component";
import { ChecklistComponent } from "./select-documents/checklist/checklist.component";
import { DocumentsComponent } from "./documents/documents.component";
import { ListDocumentsComponent } from "./documents/list-documents/list-documents.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { ConsultantProfileComponent } from "./consultant-profile/consultant-profile.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultantRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
    ...consultanttNebular,
    WebChatModule,
    AppointmentModule,
    ProfileModule,
    StepModule,
    VisaFormsModule,
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
    AppointmentComponent,
    ConsultantProfileComponent,
  ],
  exports: [],
})
export class ConsultantModule {}
