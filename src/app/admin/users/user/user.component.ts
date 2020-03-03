import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/services.index';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id;

  constructor( private _router: Router, private _activateRoute: ActivatedRoute, private _userService: UserService) {
      this._activateRoute.params.subscribe( (params) => {
        this.id = params['id'];

        if ( this.id && this.id !== 'nuevo' ){
          this.getUser( this.id );
        }
      });
  }

  ngOnInit() {
  }

  getUser( id: string ){
    console.log('Id para cargar el usuario', id);
  }

}
