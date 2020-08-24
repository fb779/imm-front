import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientRoutingModule } from "./client-routing.module";

import { ThemeModule } from "../@theme/theme.module";
import { NbMenuModule, NbCardModule, NbListModule } from "@nebular/theme";

const clientNebular = [ThemeModule, NbMenuModule, NbCardModule, NbListModule];

import { ClientComponent } from "./client.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    SharedModule,
    ...clientNebular,
  ],
  exports: [],
  declarations: [ClientComponent, DashboardComponent],
})
export class ClientModule {}
