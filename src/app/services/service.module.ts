import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import {
  SidebarService,
  AssessmentFormService,
  AuthGuardGuard,
  UserTypeGuard,
  FormsGuidesService,
  UserService,
  UsersService,
  UserProcessService,
  AdminProcessService
} from './services.index';

@NgModule({
  declarations: [],
  providers: [
    AuthGuardGuard,
    UserTypeGuard,
    SidebarService,
    AssessmentFormService,
    FormsGuidesService,
    UserService,
    UsersService,
    UserProcessService,
    AdminProcessService,
  ],
  imports: [
    CommonModule,
    // HttpClientModule
  ]
})
export class ServiceModule { }
