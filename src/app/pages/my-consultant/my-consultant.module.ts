import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThemeModule } from "../../@theme/theme.module";
import {
  NbTabsetModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
} from "@nebular/theme";

import { MyConsultantComponent } from "./my-consultant.component";
import { CardConsultantComponent } from './card-consultant/card-consultant.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
  ],
  declarations: [MyConsultantComponent, CardConsultantComponent],
  exports: [],
})
export class MyConsultantModule {}
