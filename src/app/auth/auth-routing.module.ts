import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import {
  NbLogoutComponent,
  // NbAuthComponent,
  // NbLoginComponent,
  // NbRegisterComponent,
  // NbRequestPasswordComponent,
  // NbResetPasswordComponent,
} from "@nebular/auth";

import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      // {
      //     path: 'login',
      //     component: NbLoginComponent,
      // },
      // {
      //     path: 'register',
      //     // component: NbRegisterComponent,
      //     component: RegisterComponent,
      // },
      {
        path: "logout",
        component: NbLogoutComponent,
      },
      // {
      //     path: 'request-password',
      //     component: NbRequestPasswordComponent,
      // },
      // {
      //     path: 'reset-password',
      //     component: NbResetPasswordComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
