import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminClientsRoutingModule } from './admin-client-routing.module';
import { AdminClientService } from './admin-client.service';
import { AdminClientComponent } from './admin-client.component';

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
import { FormClientComponent } from './form-client/form-client.component';

const admin_clients_nebular = [
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
    AdminClientComponent,
    FormClientComponent
  ],
  providers: [
    AdminClientService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminClientsRoutingModule,
    ...admin_clients_nebular,
  ],
  exports: [
    AdminClientComponent
  ]
})
export class AdminClientModule { }
