import {
  Component,
  Input,
  OnInit,
  Output,
  TemplateRef,
  EventEmitter,
} from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { Coupon } from "../../../models/Coupon";
import { ToastrService } from "../../../services/services.index";
import { CouponsService } from "../coupons.service";

@Component({
  selector: "ngx-delete-coupon",
  templateUrl: "./delete-coupon.component.html",
  styleUrls: ["./delete-coupon.component.scss"],
})
export class DeleteCouponComponent implements OnInit {
  @Input() coupon: Coupon;
  @Output() isDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _dialogService: NbDialogService,
    private _couponService: CouponsService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {}

  openDialog(dialog: TemplateRef<any>) {
    this._dialogService
      .open(dialog, {
        context: {
          info: "informacion adicional",
          coupon: this.coupon,
        },
        hasScroll: true,
      })
      .onClose.subscribe((data) => {
        if (data) {
          this._couponService.deleteCoupon(data).subscribe((resp: any) => {
            if (resp.ok) {
              this._toastr.toastrGenericMessage(
                "Delete successfull",
                "Coupon",
                "success"
              );
              this.isDelete.emit(resp.ok);
            }
          });
        } else {
          console.log("NO eliminar el coupon", data);
        }
      });
  }
}
