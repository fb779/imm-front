import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { FormAppointmentComponent } from "./form-appointment/form-appointment.component";
import { AppointmentService } from "../appointment.service";
import { ConsultantService } from "../../../services/services.index";
import { Client } from "../../../models/Client";
import { Appointment } from "../../../models/Appointment";
import * as moment from "moment";

@Component({
  selector: "ngx-make-appointment",
  templateUrl: "./make-appointment.component.html",
  styleUrls: ["./make-appointment.component.scss"],
})
export class MakeAppointmentComponent implements OnInit {
  clients: Client[] = [];
  list_appointment: Appointment[] = [];

  constructor(
    private dialogService: NbDialogService,
    private _consultantService: ConsultantService,
    private _appointmentService: AppointmentService
  ) {
    this._consultantService.getConsultantProcesses().subscribe((res) => {
      this.clients = res.map((el) => el.client);
    });
  }

  ngOnInit() {
    this.loadAppoinments();
  }

  loadAppoinments() {
    this._appointmentService
      .getAppointments()
      .subscribe((res: Appointment[]) => {
        this.list_appointment = res;
      });
  }

  openDialog() {
    let hasScroll = true;
    this.dialogService
      .open(FormAppointmentComponent, {
        context: {
          clients: this.clients,
        },
        hasScroll,
      })
      .onClose.subscribe((res) => {
        if (res) {
          this.loadAppoinments();
        }
      });
  }

  loadModify(item: any) {
    let apData: Appointment = {
      ...item,
      consultant: item.consultant._id,
      client: item.client._id,
      date: moment(item.date).toDate(),
    };

    let hasScroll = true;
    this.dialogService
      .open(FormAppointmentComponent, {
        context: {
          formData: apData,
          clients: this.clients,
        },
        hasScroll,
      })
      .onClose.subscribe((res) => {
        if (res) {
          this.loadAppoinments();
        }
      });
  }

  remove(item: any) {
    this._appointmentService.deleteAppointment(item._id).subscribe((res) => {
      if (res) {
        this.loadAppoinments();
      }
    });
  }
}
