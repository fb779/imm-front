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
  NbSelectModule,
} from "@nebular/theme";
import { DeleteCouponComponent } from "./delete-coupon/delete-coupon.component";

const nebular = [
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbDatepickerModule,
  NbSelectModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...nebular],
  declarations: [
    ShowCouponsComponent,
    MakeCouponsComponent,
    DeleteCouponComponent,
  ],
  exports: [ShowCouponsComponent, MakeCouponsComponent],
})
export class CouponsModule {}
