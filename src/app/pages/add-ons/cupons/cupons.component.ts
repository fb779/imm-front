import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-cupons",
  templateUrl: "./cupons.component.html",
  styleUrls: ["./cupons.component.scss"],
})
export class CuponsComponent implements OnInit {
  coupons: Coupon[] = [
    {
      id: "1",
      code: "abababcdcdcd",
      percent: 30,
      createDate: new Date(),
      endDate: new Date(),
      type: "General",
      class: "money",
    },
    {
      id: "2",
      code: "dededefgfgfg",
      percent: 50,
      createDate: new Date(),
      endDate: new Date(),
      type: "General",
      class: "pay",
    },
    {
      id: "1",
      code: "usasdiuaysiudyaisdia",
      percent: 75,
      createDate: new Date(),
      endDate: new Date(),
      type: "General",
      class: "money",
    },
  ];
  constructor() {}

  ngOnInit() {}
}

interface Coupon {
  id: string;
  code: string;
  percent: number;
  createDate: Date;
  endDate: Date;
  type: string;
  accent?: string;
  class?: string;
}
