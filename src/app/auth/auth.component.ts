import { Component, OnInit } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['./auth.component.scss'],
  // templateUrl: './auth.component.html',
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <!-- <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header> -->
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AuthComponent extends NbAuthComponent implements OnInit {

  ngOnInit() {
  }

}
