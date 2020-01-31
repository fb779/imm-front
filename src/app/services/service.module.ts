import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { SidebarService, AssessmentFormService } from './services.index';

@NgModule({
  declarations: [],
  providers: [
    AssessmentFormService,
    SidebarService
  ],
  imports: [
    CommonModule,
    // HttpClientModule
  ]
})
export class ServiceModule { }
