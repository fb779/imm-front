import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbProgressBarModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";

import { NgxEchartsModule } from "ngx-echarts";
import { DashboardComponent } from "./dashboard.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { AppointmentModule } from "../../shared/appointment/appointment.module";
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbProgressBarModule,
    NgxEchartsModule,
    AppointmentModule,
  ],
  declarations: [DashboardComponent, CountdownComponent, CardsComponent],
})
export class DashboardModule {}
