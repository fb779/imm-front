import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Appointment } from "../../models/Appointment";
import { environment } from "../../../environments/environment";
import { pluck, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AppointmentService {
  constructor(private _http: HttpClient) {}

  getAppointments() {
    const url = `${environment.api_url}${environment.api_version}/appointment`;

    return this._http.get(url).pipe(pluck("data"));
  }

  getAppointmentId(id: string) {
    const url = `${environment.api_url}${environment.api_version}/appointment/${id}`;

    return this._http.get(url).pipe(pluck("data"));
  }

  createAppointment(appointment: Appointment) {
    const url = `${environment.api_url}${environment.api_version}/appointment`;

    return this._http.post(url, appointment).pipe(pluck("data"));
  }

  editAppointment(id: string, appointment: Appointment) {
    const url = `${environment.api_url}${environment.api_version}/appointment/${id}`;

    return this._http.put(url, appointment).pipe(pluck("data"));
  }

  deleteAppointment(id: string) {
    const url = `${environment.api_url}${environment.api_version}/appointment/${id}`;

    return this._http.delete(url).pipe();
  }

  validAppointment(date: Date, hour: string) {
    const url = `${environment.api_url}${environment.api_version}/appointment/valid?date=${date}&hour=${hour}`;

    return this._http.get(url).pipe(pluck("data"));
  }
}
