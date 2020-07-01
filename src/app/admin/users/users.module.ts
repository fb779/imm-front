import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersRoutingModule } from "./users-routing.module";

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

const user_nebular = [
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

import { UsersComponent } from "./users.component";
import { UserComponent } from "./user/user.component";
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...user_nebular,
  ],
  exports: [],
  declarations: [UsersComponent, UserComponent],
  providers: [ UsersService ]
})
export class UsersModule {}
