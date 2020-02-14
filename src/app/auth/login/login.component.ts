import { Component, OnInit } from '@angular/core';

import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  // styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  ngOnInit() {

  }

}
