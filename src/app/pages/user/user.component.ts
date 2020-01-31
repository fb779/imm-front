import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user',
  styleUrls: ['./user.component.scss'],
  template: `<router-outlet></router-outlet>`
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
