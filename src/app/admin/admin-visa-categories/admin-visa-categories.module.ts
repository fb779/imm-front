import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminVisaCategoriesRoutingModule } from "./admin-visa-categories-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";

import {
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbListModule,
} from "@nebular/theme";

import { AdminVisaCategoriesComponent } from "./admin-visa-categories.component";
import { AdminVisaCategoriesFormComponent } from "./admin-visa-categories-form/admin-visa-categories-form.component";
import { AdminVisaCategoriesService } from "./admin-visa-categories.service";

const admin_visa_nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbListModule,
];

@NgModule({
  declarations: [
    AdminVisaCategoriesComponent,
    AdminVisaCategoriesFormComponent,
  ],
  providers: [AdminVisaCategoriesService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminVisaCategoriesRoutingModule,
    ...admin_visa_nebular,
  ],
})
export class AdminVisaCategoriesModule {}
