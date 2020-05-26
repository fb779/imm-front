import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FamilyComponent } from './family.component';
import { FormFamilyMembersComponent } from './form-family-members/form-family-members.component';
import { FamilyListComponent } from './family-list/family-list.component';

import {
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbMenuModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbStepperModule,
  NbListModule,
  NbDatepickerModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbAlertModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
  NbDialogModule,
} from "@nebular/theme";



const nebular_family = [
  // NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  // NbCheckboxModule,
  NbButtonModule,
  NbSpinnerModule,
  NbDialogModule.forRoot(),
  NbAlertModule,
  // NbDatepickerModule,
  // NbStepperModule,
  // NbListModule,
  // NbAccordionModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular_family,
  ],
  declarations: [
    FamilyComponent,
    FamilyListComponent,
    FormFamilyMembersComponent,
  ],
  exports:[
    FamilyComponent
  ],
  entryComponents: [
    FormFamilyMembersComponent,
  ],
})
export class FamilyModule { }
