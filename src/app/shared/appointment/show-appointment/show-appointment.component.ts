import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "../appointment.service";
import { Appointment } from "../../../models/Appointment";

@Component({
  selector: "ngx-show-appointment",
  templateUrl: "./show-appointment.component.html",
  styleUrls: ["./show-appointment.component.scss"],
})
export class ShowAppointmentComponent implements OnInit {
  list_appointment: Appointment[];
  constructor(private _appointmentServices: AppointmentService) {
    this.loadAppointments();
  }

  ngOnInit() {}

  loadAppointments() {
    this._appointmentServices
      .getAppointments()
      .subscribe((res: Appointment[]) => {
        this.list_appointment = res;
      });
  }
}
