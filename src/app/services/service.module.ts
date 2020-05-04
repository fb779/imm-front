import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

import { AuthGuardGuard } from './auth-guard/auth-guard.guard';
import { AdminProfileGuard } from './auth-guard/admin-profile.guard';
import { UserTypeGuard } from './auth-guard/user-type.guard';
import { SidebarService } from './sidebar/sidebar.service';
import { AssessmentFormService } from './assessment-form/assessment-form.service';
import { FormsGuidesService } from './forms-guides/forms-guides.service';
import { UserService } from './user/user.service';
import { UsersService } from './users/users.service';
import { UserProcessService } from './process/user-process.service';
import { AdminProcessService } from './process/admin-process.service';
import { ConsultantService } from './consultant/consultant.service';
import { ProcessService } from './process/process.service';
import { FamilyService } from './family/family.service';
import { ChecklistService } from './checklist/checklist.service';
import { DocumentService } from './document/document.service';

@NgModule({
  declarations: [],
  providers: [
    AuthGuardGuard,
    AdminProfileGuard,
    UserTypeGuard,
    SidebarService,
    AssessmentFormService,
    FormsGuidesService,
    UserService,
    UsersService,
    UserProcessService,
    AdminProcessService,
    ConsultantService,
    ProcessService,
    FamilyService,
    ChecklistService,
    DocumentService
  ],
  imports: [
    CommonModule,
    // HttpClientModule
  ]
})
export class ServiceModule { }
