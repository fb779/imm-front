import { Injectable } from '@angular/core';
// import { MENU_ITEMS as ADMIN} from '../../admin/pages-menu';
// import { MENU_ITEMS as PAGES } from '../../pages/pages-menu';
// import { MENU_ITEMS as CLIENT } from '../../client/pages-menu';
// import { MENU_ITEMS as USER} from '../../consultant/pages-menu';
import { NbMenuService } from '@nebular/theme';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import {
  ADMIN_MENU_ITEMS as ADMIN,
  USER_MENU_ITEMS as USER,
  CLIENT_MENU_ITEMS as CLIENT
} from './pages-menu';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = [];

  constructor( private _menuServices: NbMenuService, private authServices: NbAuthService ) {
    this.authServices.onTokenChange().subscribe((token: NbAuthJWTToken)=>{
      var dt = token.getPayload();

      if(!dt){
        return;
      }

      if (dt.user.role === 'ADMIN_ROLE'){
        this.menu = ADMIN;
      }

      if (dt.user.role === 'USER_ROLE'){
        this.menu = USER;
        // this.menu = [];
      }

      if (dt.user.role === 'CLIENT_ROLE'){
        this.menu = CLIENT;
      }

      // if (dt.user.role !== 'ADMIN_ROLE'){
      //   this.menu = CLIENT;
      // }
    });
  }

  changeIsHiddenItem ( item: string, visible: boolean ){
    // let index = null;
    this.menu.forEach((el, i, ob)=>{
      if (el.title.includes(item)){
        el.hidden = (el.hidden !== visible) ? visible: el.hidden;
        ob[i] = el;
        return;
      }
    });

  }

}
