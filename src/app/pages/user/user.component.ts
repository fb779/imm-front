import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user',
  styleUrls: ['./user.component.scss'],
  // templateUrl: 'user.component.html',
  template: `<router-outlet></router-outlet>`
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
