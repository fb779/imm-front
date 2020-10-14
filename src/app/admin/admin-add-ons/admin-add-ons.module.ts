import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminAddOnsRoutingModule } from "./admin-add-ons-routing.module";
import { CouponsModule } from "../../components/coupons/coupons.module";

import { NbButtonModule, NbIconModule } from "@nebular/theme";

import { AdminAddOnsComponent } from "./admin-add-ons.component";

import { AdminAddOnsListComponent } from "./admin-add-ons-list/admin-add-ons-list.component";
import { AdminAddOnsFormComponent } from "./admin-add-ons-form/admin-add-ons-form.component";

@NgModule({
  imports: [
    CommonModule,
    AdminAddOnsRoutingModule,
    CouponsModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    AdminAddOnsComponent,
    AdminAddOnsListComponent,
    AdminAddOnsFormComponent,
  ],
})
export class AdminAddOnsModule {}
