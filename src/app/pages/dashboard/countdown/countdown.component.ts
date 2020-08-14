import { Component, OnInit, Input } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "ngx-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnInit {
  format = "YYYY-MM-DD";
  @Input("date") date: string = null;

  finish_time = 30; //
  start_date;
  end_date;
  today = moment();
  time;
  left_days;
  color_status = "default";
  constructor() {}

  ngOnInit() {
    if (this.date !== null) {
      this.start_date = moment(this.date);
      this.end_date = moment(this.date).add(this.finish_time, "days");
      this.time = this.today.diff(this.start_date, "days");
      this.left_days = this.finish_time - this.time;
    }
  }

  addDay() {
    this.start_date.add(1, "day");
    this.time = this.today.diff(this.start_date, "days");
  }

  subDay() {
    this.start_date.subtract(1, "day");
    this.time = this.today.diff(this.start_date, "days");
  }

  calcular() {
    let time = 0;

    time = Math.trunc((this.time * 100) / 30);

    time = time <= 100 ? time : 100;

    if (time < 60) this.color_status = "success";
    if (time >= 60 && time < 75) this.color_status = "info";
    if (time >= 75 && time < 90) this.color_status = "primary";
    if (time >= 90) this.color_status = "danger";

    return time;
  }
}
