import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

    constructor( private _router: Router) {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  navigateLink(link: string){
    this._router.navigate([link]);
  }

}
