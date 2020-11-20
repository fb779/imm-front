import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FamilyComponent } from "./family.component";
import { FormFamilyMembersComponent } from "./form-family-members/form-family-members.component";
import { FamilyListComponent } from "./family-list/family-list.component";

import {
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbListModule,
  NbSpinnerModule,
  NbAlertModule,
  NbDialogModule,
  NbMenuModule,
  NbCheckboxModule,
  NbStepperModule,
  NbDatepickerModule,
  NbAccordionModule,
  NbActionsModule,
  NbRadioModule,
  NbUserModule,
} from "@nebular/theme";
import { DeleteFamilyMemberComponent } from "./delete-family-member/delete-family-member.component";

const nebular_family = [
  // NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  // NbCheckboxModule,
  NbButtonModule,
  NbSpinnerModule,
  NbAlertModule,
  NbListModule,
  NbDialogModule.forRoot(),
  // NbDatepickerModule,
  // NbStepperModule,
  // NbAccordionModule,
  // NbActionsModule,
  // NbRadioModule,
  // NbUserModule
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...nebular_family],
  declarations: [
    FamilyComponent,
    FamilyListComponent,
    FormFamilyMembersComponent,
    DeleteFamilyMemberComponent,
  ],
  exports: [FamilyComponent],
  entryComponents: [FormFamilyMembersComponent, DeleteFamilyMemberComponent],
})
export class FamilyModule {}
