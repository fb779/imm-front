import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FamilyMembersComponent } from "./family-members.component";
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
  NbAccordionModule,
  NbCheckboxModule,
} from "@nebular/theme";

import { DeleteFamilyMemberComponent } from "./delete-family-member/delete-family-member.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { ShowFamilyMembersComponent } from "./show-family-members/show-family-members.component";

const nebular_family = [
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbButtonModule,
  NbSpinnerModule,
  NbAlertModule,
  NbListModule,
  NbDialogModule.forRoot(),
  NbAccordionModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...nebular_family],
  declarations: [
    FamilyMembersComponent,
    FamilyListComponent,
    FormFamilyMembersComponent,
    DeleteFamilyMemberComponent,
    WrapperComponent,
    ShowFamilyMembersComponent,
  ],
  exports: [FamilyMembersComponent],
  entryComponents: [WrapperComponent, DeleteFamilyMemberComponent],
})
export class FamilyMembersModule {}
