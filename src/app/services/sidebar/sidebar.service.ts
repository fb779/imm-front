import { Injectable } from '@angular/core';
import { MENU_ITEMS } from '../../pages/pages-menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu = MENU_ITEMS;

  constructor() { }

  changeIsHiddenItem ( item: string, visible: boolean ){
    let index = null;
    this.menu.forEach((el, i, ob)=>{

      if (el.title.includes(item)){
        el.hidden = (el.hidden !== visible) ? visible: el.hidden;
        ob[i] = el;
        return;
      }
    });

  }

}
