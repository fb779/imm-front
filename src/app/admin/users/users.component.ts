import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/services.index';
import { UsersService } from './users.service';
import { User } from '../../models/User';
import { roles } from '../../config/config';

@Component({
  selector: 'ngx-users',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor( private _router: Router, private _usersService: UsersService) {

    this._usersService.getUsers({field:'role', value: roles.admin}, {field:'role', value: roles.user}).subscribe(( data: any)=>{
      this.users = data.users;
    });
  }

  ngOnInit() {
  }

  verUsusario(user: User){
    console.log(user);
  }

}
