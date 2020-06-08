import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-client-message',
  template: `<router-outlet></router-outlet>`,
  // templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.scss']
})
export class ClientMessageComponent implements OnInit {


  constructor() {

   }

  ngOnInit() {
  }

}
