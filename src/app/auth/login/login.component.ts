import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  // styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  ngOnInit(){

  }

  // ngOnInit() {
  //   this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
  //     if (token.isValid()) {
  //       let data = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable

  //         // console.log('Carga de informacion del usuario',data);
  //       if ( data.user.role === 'ADMIN_ROLE'){
  //         this.router.navigate(['/admin']);
  //         return;
  //       }

  //       if ( data.user.role !== 'ADMIN_ROLE'){
  //         this.router.navigate(['/pages']);
  //         return;
  //       }
  //     }
  //   });
  // }

}
