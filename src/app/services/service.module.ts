import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { SidebarService, AssessmentFormService, AuthGuardGuard, FormsGuidesService } from './services.index';

@NgModule({
  declarations: [],
  providers: [
    AuthGuardGuard,
    SidebarService,
    AssessmentFormService,
    FormsGuidesService
  ],
  imports: [
    CommonModule,
    // HttpClientModule
  ]
})
export class ServiceModule { }
