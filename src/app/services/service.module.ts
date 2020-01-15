import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { AssessmentFormService } from './services.index';

@NgModule({
  declarations: [],
  providers: [
    AssessmentFormService
  ],
  imports: [
    CommonModule,
    // HttpClientModule
  ]
})
export class ServiceModule { }
