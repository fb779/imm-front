import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';

import { NbAuthModule, NbAuthComponent } from '@nebular/auth';
import {
  NbLayoutModule,
  NbCardModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
} from '@nebular/theme';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authNebular = [
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    ...authNebular,
    NbAuthModule,
  ],
  exports: [],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthModule { }
