import { Injectable } from "@angular/core";
import {
  NbToastrService,
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbPosition,
  NbIconConfig,
} from "@nebular/theme";

@Injectable({
  providedIn: "root",
})
export class ToastrService {
  private limit = 3;
  private duration = {
    fast: 2000,
    regular: 3000,
    long: 4000,
  };

  constructor(private _toastrService: NbToastrService) {}

  toastMessageWarning(message, title, inp_status = null) {
    const status: NbComponentStatus = inp_status || "warning";
    const position = NbGlobalLogicalPosition.TOP_END;

    const icon =
      status === "success" ? "done-all-outline" : "alert-triangle-outline";
    const iconPack = "eva";

    this._toastrService.warning(message, title, {
      position,
      duration: this.duration.regular,
      icon,
      iconPack,
      limit: this.limit,
    });
  }

  toastrGenericMessage(message, title, inp_status = null) {
    const status: NbComponentStatus = inp_status || "success";
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration =
      status === "danger" ? this.duration.long : this.duration.regular;
    const icon =
      status === "success" ? "done-all-outline" : "alert-triangle-outline";
    const iconPack = "eva";

    this._toastrService.show(message, title, {
      status,
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit,
    });
  }

  toastrDownload(
    message,
    title,
    inp_status = null,
    inp_icon = "cloud-download-outline"
  ) {
    const status: NbComponentStatus = inp_status || "success";
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration =
      inp_status === "danger" ? this.duration.long : this.duration.regular;
    const icon = inp_icon;
    const iconPack = "eva";

    this._toastrService.show(message, title, {
      status,
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit,
    });
  }

  toastrGenericErrorHttp(message, title, status = "danger") {
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration =
      status === "danger" ? this.duration.long : this.duration.regular;
    const icon = "alert-circle-outline" || "alert-triangle-outline";
    const iconPack = "eva";

    this._toastrService.danger(message, title, {
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit,
    });
  }
}
