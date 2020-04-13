import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { SidebarService } from '../services/services.index';

@Component({
  selector: 'ngx-consultant',
  styleUrls: ['./consultant.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="this._sidebarServices.menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ConsultantComponent implements OnInit {

  constructor( private iconLibraries: NbIconLibraries, public _sidebarServices: SidebarService ) {
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
  }

}
