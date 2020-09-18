import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ThemeModule } from "../@theme/theme.module";
import {
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
  // NbUserModule,
} from "@nebular/theme";

const nebular = [ThemeModule, NbMenuModule, NbCardModule];

import { ProfileModule } from "../shared/profile/profile.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";
import { AdminAddOnsComponent } from "./admin-add-ons/admin-add-ons.component";
import { CouponsModule } from "../components/coupons/coupons.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    ProfileModule,
    CouponsModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProfileComponent,
    AdminAddOnsComponent,
  ],
})
export class AdminModule {}
