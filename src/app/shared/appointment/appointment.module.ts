import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbCheckboxModule,
  NbDatepickerModule,
} from "@nebular/theme";
import { MakeAppointmentComponent } from "./make-appointment/make-appointment.component";
import { ShowAppointmentComponent } from "./show-appointment/show-appointment.component";
import { ListAppointmentComponent } from "./make-appointment/list-appointment/list-appointment.component";
import { FormAppointmentComponent } from "./make-appointment/form-appointment/form-appointment.component";

const nebular_app = [
  NbIconModule,
  NbSpinnerModule,
  NbAlertModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbButtonModule,
  NbListModule,
  NbDatepickerModule,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular_app,
  ],
  declarations: [
    MakeAppointmentComponent,
    ShowAppointmentComponent,
    ListAppointmentComponent,
    FormAppointmentComponent,
  ],
  exports: [MakeAppointmentComponent, ShowAppointmentComponent],
  entryComponents: [FormAppointmentComponent],
})
export class AppointmentModule {}
