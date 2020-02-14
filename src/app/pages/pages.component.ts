import { Component, OnInit } from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';

import { NbIconLibraries } from '@nebular/theme';
import { SidebarService } from '../services/services.index';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="_sidebarServices.menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  // menu = MENU_ITEMS;

  constructor(
    private iconLibraries: NbIconLibraries,
    public _sidebarServices: SidebarService
  ) {
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
  }
}
