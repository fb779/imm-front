import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/services.index';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-admin',
  styleUrls: ['./admin.component.scss'],
  // templateUrl: './admin.component.html',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="_sidebarServices.menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AdminComponent implements OnInit {

  constructor( public _sidebarServices: SidebarService, private iconLibraries: NbIconLibraries ) {
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
  }

}
