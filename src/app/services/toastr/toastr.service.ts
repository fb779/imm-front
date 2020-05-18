import { Injectable } from '@angular/core';
import { NbToastrService, NbComponentStatus, NbGlobalLogicalPosition, NbPosition, NbIconConfig } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private limit : 3;

  constructor(private _toastrService: NbToastrService) { }

  toastMessageWarning(message, title, inp_status = null){
    const status: NbComponentStatus = inp_status || 'warning';
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration = 4000;
    const icon = (status === 'success') ? 'done-all-outline' : 'alert-triangle-outline' ;
    const iconPack = 'eva';

    this._toastrService.warning(
      message,
      title,
      {
        position,
        duration,
        icon,
        iconPack,
        limit: this.limit
      }
    );
  }

  toastrGenericMessage(message, title, inp_status = null){
    const status: NbComponentStatus = inp_status || 'success';
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration = (status === 'danger') ? 4000 : 2000;
    const icon = (status === 'success') ? 'done-all-outline' : 'alert-triangle-outline' ;
    const iconPack = 'eva';

    this._toastrService.show( message, title, {
      status,
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit
    });
  }

  toastrDownload(message, title, inp_status = null, inp_icon = 'cloud-download-outline'){
    const status: NbComponentStatus = inp_status || 'success';
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration = (inp_status === 'danger') ? 4000 : 2000;
    const icon = inp_icon;
    const iconPack = 'eva';

    this._toastrService.show( message, title, {
      status,
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit
    });
  }

  toastrGenericErrorHttp(message, title ){
    const position = NbGlobalLogicalPosition.TOP_END;
    const duration = (status === 'danger') ? 4000 : 2000;
    const icon = 'alert-circle-outline' || 'alert-triangle-outline';
    const iconPack = 'eva';

    this._toastrService.danger( message, title, {
      position,
      duration,
      icon,
      iconPack,
      limit: this.limit,
    });
  }
}
