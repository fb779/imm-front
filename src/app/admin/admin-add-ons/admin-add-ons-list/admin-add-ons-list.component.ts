import { Component, OnInit } from "@angular/core";
import { Coupon } from "../../../models/Coupon";
import { CouponsService } from "../../../components/coupons/coupons.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-admin-add-ons-list",
  templateUrl: "./admin-add-ons-list.component.html",
  styleUrls: ["./admin-add-ons-list.component.scss"],
})
export class AdminAddOnsListComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  newAddons() {
    this._router.navigate(["/admin/add-ons/new"]);
  }
}
