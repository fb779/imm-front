import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";
import {
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbIconModule,
  NbCheckboxModule,
  NbAlertModule,
  NbSpinnerModule,
  NbBadgeModule,
} from "@nebular/theme";

const nebular_profile = [
  ThemeModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbAlertModule,
  NbSpinnerModule,
  NbBadgeModule,
];

import { ProfileComponent } from "./profile.component";
import { ProfileClientComponent } from "./profile-client/profile-client.component";
import { ProfileConsultantComponent } from "./profile-consultant/profile-consultant.component";
import { NbButtonModule } from "@nebular/theme";
import { ProfileImageComponent } from "./profile-image/profile-image.component";
import { ProfilePasswordComponent } from "./profile-password/profile-password.component";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileClientComponent,
    ProfileConsultantComponent,
    ProfileImageComponent,
    ProfilePasswordComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ...nebular_profile],
  exports: [ProfileComponent],
})
export class ProfileModule {}
