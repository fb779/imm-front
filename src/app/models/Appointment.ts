import { User } from "./User";
import * as moment from "moment";

export interface Appointment {
  _id: String;
  consultant: string;
  client: string;
  date: Date;
  hour: Number;
  time: Number;
  state?: Boolean;
}
