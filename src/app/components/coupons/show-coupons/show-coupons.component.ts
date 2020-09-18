import { Component, OnInit, Input } from "@angular/core";
import { Coupon } from "../../../models/coupon";

@Component({
  selector: "ngx-show-coupons",
  templateUrl: "./show-coupons.component.html",
  styleUrls: ["./show-coupons.component.scss"],
})
export class ShowCouponsComponent implements OnInit {
  @Input("listCoupons") coupons: Coupon[] = [];
  // coupons: Coupon[] = [
  //   {
  //     _id: "1",
  //     code: "abababcdcdcd",
  //     percent: null,
  //     activation: new Date(),
  //     expiration: new Date(),
  //     group: "General",
  //   },
  //   {
  //     _id: "2",
  //     code: "dededefgfgfg",
  //     percent: 50,
  //     activation: new Date(),
  //     expiration: new Date(),
  //     group: "General",
  //   },
  //   {
  //     _id: "1",
  //     code: "usasdiuaysiudyaisdia",
  //     percent: 75,
  //     activation: new Date(),
  //     expiration: new Date(),
  //     group: "General",
  //   },
  // ];

  constructor() {}

  ngOnInit() {}
}
