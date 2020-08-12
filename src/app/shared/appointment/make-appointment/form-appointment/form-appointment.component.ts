import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  AbstractControl,
} from "@angular/forms";
import { of, Observable } from "rxjs";
import { NbDialogRef, NbDateService } from "@nebular/theme";
import { IOption, IOptionNumber } from "../../../../models/Option";
import { Appointment } from "../../../../models/Appointment";
import { User } from "../../../../models/User";
import { AppointmentService } from "../../appointment.service";
import {
  UserService,
  ToastrService,
} from "../../../../services/services.index";
import * as moment from "moment";
import { AppointmentValidator } from "../../appointment-validator";

@Component({
  selector: "ngx-form-appointment",
  templateUrl: "./form-appointment.component.html",
  styleUrls: ["./form-appointment.component.scss"],
})
export class FormAppointmentComponent implements OnInit {
  formAppointment: FormGroup;
  min: Date;
  max: Date;
  user: User = this._userService.user;
  // @Input("ap") appointment: Appointment;
  @Input("formData") formData: Appointment = {
    _id: "new",
    client: "",
    consultant: this.user._id,
    date: null,
    hour: null,
    time: null,
    state: true,
  };
  @Input("consultants") consultants: any[] = [this.user];
  @Input("clients") clients: any[] = [];
  submitted = false;

  optiosTime$: Observable<IOptionNumber[]> = of([
    { name: "30 min", value: 30 },
    { name: "60 min", value: 60 },
  ]);

  optiosHours$: Observable<IOption[]> = of([
    { value: "09:00", name: "09:00" },
    { value: "10:00", name: "10:00" },
    { value: "11:00", name: "11:00" },
    { value: "14:00", name: "14:00" },
    { value: "15:00", name: "15:00" },
    { value: "16:00", name: "16:00" },
  ]);

  constructor(
    private dialogRef: NbDialogRef<FormAppointmentComponent>,
    protected dateService: NbDateService<Date>,
    private _userService: UserService,
    private fb: FormBuilder,
    private _appointmentService: AppointmentService,
    private _toastr: ToastrService
  ) {
    this.min = moment().toDate(); // this.dateService.addDay(this.dateService.today(), 1);
    this.max = moment().add(1, "month").toDate(); //this.dateService.addMonth(this.dateService.today(), 1);
    // console.log(this.user);
  }

  ngOnInit() {
    this.build();
  }

  build() {
    this.formAppointment = this.fb.group(
      {
        _id: this.fb.control(""),
        consultant: this.fb.control("", [Validators.required]),
        client: this.fb.control("", [Validators.required]),
        date: this.fb.control(null, [Validators.required]),
        hour: this.fb.control("", [Validators.required]),
        time: this.fb.control("", [Validators.required]),
        state: this.fb.control(true),
      },
      {
        asyncValidators: [
          AppointmentValidator.validAppointment(this._appointmentService),
        ],
      }
    );

    this.formAppointment.setValue(this.formData);
  }

  get f() {
    return this.formAppointment.controls;
  }

  get errors() {
    return this.formAppointment.errors;
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    if (this.formAppointment.invalid) {
      const msg =
        this.errors && this.errors.appointmentExist
          ? "The date and time is already assigned"
          : "Complete the information required";
      this.submitted = true;
      this._toastr.toastrGenericMessage(
        // "Complete the information required",
        msg,
        "Form Apointment",
        "warning"
      );
      return;
    }

    if (this.formData._id === "new") {
      this._appointmentService
        .createAppointment(this.formAppointment.value)
        .subscribe((res) => {
          console.log("Creacion del appointment", res);
          this.dialogRef.close(true);
        });
    }

    if (this.formData._id !== "new") {
      this._appointmentService
        .editAppointment(
          this.formData._id.toString(),
          this.formAppointment.value
        )
        .subscribe((res) => {
          console.log("edicion del appointment", res);
          this.dialogRef.close(true);
        });
    }
  }
}
