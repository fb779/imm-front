import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConsultantAddOnsRoutingModule } from "./consultant-add-ons-routing.module";
import { ConsultantAddOnsComponent } from "./consultant-add-ons.component";
import { ConsultantAddOnsListComponent } from "./consultant-add-ons-list/consultant-add-ons-list.component";

import { ThemeModule } from "../../@theme/theme.module";
import { NbCardModule, NbIconModule, NbSpinnerModule } from "@nebular/theme";
import { CouponsModule } from "../../components/coupons/coupons.module";
import { ConsultantAddOnsFormComponent } from './consultant-add-ons-form/consultant-add-ons-form.component';

const nebular_addons = [
  ThemeModule,
  NbCardModule,
  NbIconModule,
  NbSpinnerModule,
];

@NgModule({
  declarations: [ConsultantAddOnsComponent, ConsultantAddOnsListComponent, ConsultantAddOnsFormComponent],
  imports: [
    CommonModule,
    ConsultantAddOnsRoutingModule,
    ...nebular_addons,
    CouponsModule,
  ],
})
export class ConsultantAddOnsModule {}
