import { Component, OnInit } from "@angular/core";
import { Coupon } from "../../models/coupon";
import { CouponsService } from "../../components/coupons/coupons.service";

@Component({
  selector: "ngx-admin-add-ons",
  templateUrl: "./admin-add-ons.component.html",
  styleUrls: ["./admin-add-ons.component.scss"],
})
export class AdminAddOnsComponent implements OnInit {
  list: Coupon[] = [];

  constructor(private _couponService: CouponsService) {
    this._couponService.getListCoupon().subscribe((resp: Coupon[]) => {
      this.list = resp;
    });
  }

  ngOnInit() {}
}
