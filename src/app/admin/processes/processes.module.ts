import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProcessesRoutingModule } from "./processes-routing.module";

import { ThemeModule } from "../../@theme/theme.module";

import {
  NbMenuModule,
  NbCardModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
} from "@nebular/theme";

const processes_nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbSelectModule,
  NbButtonModule,
  NbIconModule,
];

import { ProcessesComponent } from "./processes.component";

@NgModule({
  imports: [CommonModule, ProcessesRoutingModule, ...processes_nebular],
  exports: [],
  declarations: [ProcessesComponent],
})
export class ProcessesModule {}
