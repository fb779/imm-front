import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Coupon } from "../../../models/Coupon";
import { roles } from "../../../config/config";
import { UserService } from "../../../services/services.index";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-show-coupons",
  templateUrl: "./show-coupons.component.html",
  styleUrls: ["./show-coupons.component.scss"],
})
export class ShowCouponsComponent implements OnInit {
  @Input("listCoupons") coupons: Coupon[] = [];
  @Output() isDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  role: string;

  showFooter: boolean = false;
  isAdmin: boolean = false;

  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit() {
    this.role = this._userService.user.role;

    switch (this.role) {
      case roles.admin:
        this.showFooter = true;
        this.isAdmin = true;
        break;
      case roles.user:
        this.showFooter = true;
        this.isAdmin = false;
        break;
      default:
        this.showFooter = false;
        break;
    }
  }

  editCoupon(id: string) {
    this._router.navigate(["/admin", "add-ons", id]);
  }

  deleteCoupon(ev: boolean) {
    this.isDelete.emit(ev);
  }
}
