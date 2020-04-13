import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbAuthService } from '@nebular/auth';
import { NbIconLibraries } from '@nebular/theme';
import { SidebarService, UserService } from '../services/services.index';

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
    private _router: Router,
    private _authServices: NbAuthService,
    private _iconLibraries: NbIconLibraries,
    public _sidebarServices: SidebarService,
    // private _userServices: UserService

  ) {
    this._iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this._iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });

    this._authServices.onTokenChange().subscribe((token)=>{
      if ( token.isValid() ){
        let user = token.getPayload()['user'];

        switch (user.role) {
          case 'ADMIN_ROLE':{
            this._router.navigate(['/admin']);
          }break;

          case 'CLIENT_ROLE':{
            // this._router.navigate(['/client']);
          }break;

          case 'USER_ROLE':{
            this._router.navigate(['/consultant']);
          }break;

          default:{
            this._router.navigate(['/auth/logout']);
          }break;
        }

      }
    });
  }

  ngOnInit() {
  }
}
