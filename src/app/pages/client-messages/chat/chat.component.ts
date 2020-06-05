import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProcessService, UserService } from '../../../services/services.index';
import { Process } from '../../../models/Process';

@Component({
  selector: 'ngx-chat',
  // template: ``,
  template: `
    <div *ngIf="id_process">
      <ngx-web-chat  [process]="id_process" ></ngx-web-chat>
    </div>
  `,
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  id_process: string;

  constructor(
    private _router: Router, private _activatedRoute: ActivatedRoute,
    private _userService: UserService, private _processServices: UserProcessService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.id_process = params['process'];
    });
  }

  ngOnInit() { }

}
