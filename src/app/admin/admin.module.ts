import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ThemeModule } from "../@theme/theme.module";
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
  NbUserModule,
} from "@nebular/theme";

const nebular = [ThemeModule, NbMenuModule, NbCardModule];

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
  ],
  exports: [],
  declarations: [AdminComponent, DashboardComponent],
})
export class AdminModule {}
