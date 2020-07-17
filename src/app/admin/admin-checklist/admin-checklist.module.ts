import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminChecklistRoutingModule } from "./admin-checklist-routing.module";

import { ThemeModule } from "../../@theme/theme.module";

import {
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbListModule,
  NbSpinnerModule,
} from "@nebular/theme";

import { AdminChecklistService } from "./admin-checklist.service";
import { AdminChecklistComponent } from "./admin-checklist.component";
import { AdminChecklistFormComponent } from "./admin-checklist-form/admin-checklist-form.component";

const admin_checklist_nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbListModule,
  NbSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    AdminChecklistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...admin_checklist_nebular,
  ],
  providers: [AdminChecklistService],
  declarations: [AdminChecklistComponent, AdminChecklistFormComponent],
  exports: [AdminChecklistComponent],
})
export class AdminChecklistModule {}
