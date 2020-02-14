import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/services.index';

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

  constructor(
    public _sidebarServices: SidebarService
  ) { }

  ngOnInit() {
  }

}
