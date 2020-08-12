import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Appointment } from "../../../../models/Appointment";
import * as moment from "moment";

@Component({
  selector: "ngx-list-appointment",
  templateUrl: "./list-appointment.component.html",
  styleUrls: ["./list-appointment.component.scss"],
})
export class ListAppointmentComponent implements OnInit {
  @Input("list") list: Appointment[] = [];
  @Output() modify: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
