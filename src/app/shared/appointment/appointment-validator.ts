import { AppointmentService } from "./appointment.service";
import {
  FormGroup,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map, pluck, tap } from "rxjs/operators";

export class AppointmentValidator {
  static validAppointment(
    _appointmentService: AppointmentService
  ): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors> => {
      console.log("validando esta joda");
      let date = group.get("date");
      let hour = group.get("hour");
      return _appointmentService
        .validAppointment(date.value, hour.value)
        .pipe(
          map((result: boolean) =>
            !result ? null : { appointmentExist: true }
          )
        );
    };
  }
}
