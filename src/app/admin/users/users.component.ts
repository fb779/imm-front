import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/services.index';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];

  constructor( private _router: Router, private _userService: UserService) {
    this._userService.getUsers().subscribe(( data: any)=>{
      this.users = data.users;
    });
  }

  ngOnInit() {
  }


}
