import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from './users-routing.module';

import { ThemeModule } from '../../@theme/theme.module';

import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule
} from '@nebular/theme';

const user_nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  // NbInputModule,
  // NbSelectModule,
  // NbActionsModule,
  NbButtonModule,
  // NbCheckboxModule,
  // NbDatepickerModule,
  NbIconModule,
  // NbRadioModule,
  // NbUserModule
];

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ...user_nebular,
    Ng2SmartTableModule
  ],
  exports: [],
  declarations: [
    UsersComponent,
    UserComponent,
  ]
})
export class UsersModule { }
