import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ShowCouponsComponent } from "./show-coupons/show-coupons.component";
import { MakeCouponsComponent } from "./make-coupons/make-coupons.component";

import {
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbDatepickerModule,
} from "@nebular/theme";

const nebular = [
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbDatepickerModule,
];

@NgModule({
  declarations: [ShowCouponsComponent, MakeCouponsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...nebular],
  exports: [ShowCouponsComponent, MakeCouponsComponent],
})
export class CouponsModule {}
