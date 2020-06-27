import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { User } from '../../models/User';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor( private _http: HttpClient ) { }

  getUsers(...params) {
    let fields = params.reduce((acc, cur)=> (acc) ? `${acc}&${cur.field}=${cur.value}` : `?${cur.field}=${cur.value}`,'');
    console.log(fields);
    let url = `${environment.api_url}${environment.api_version}/users${fields}`;


    return this._http.get(url).pipe(
      map((resp: any) => resp.data)
    );
  }

  getUser(id: string){
    console.log(`id del usuario a consultar ${ id }`);

    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.get(url).pipe(
      map((resp: any) => {
        let user: User = resp.data.user;
        return user;
      })
    );
  }

  createUser(user: User){
    console.log(`'nuevo ususario para crear' ${ user.first_name}`);
    return of({user});

    // const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    // return this._http.post( url, user ).pipe();
  }

  updateUser(id: string, user: User){
    // console.log(`Id: ${id}, ususario para editar ${ user.first_name}`);
    // return of({id, user});
    const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    return this._http.put(url, user).pipe(
      // tap( (data) => console.log(data) )
    );
  }

  deleteUser(id: string){
    console.log(`id del usuario a eliminar ${ id }`);
    return of({id});
    // const url = `${environment.api_url}${environment.api_version}/users/${id}`;
    // return this._http.delete(url).pipe();
  }

}
