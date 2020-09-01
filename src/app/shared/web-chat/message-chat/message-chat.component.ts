import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { ToastrService } from "../../../services/services.index";

@Component({
  selector: "ngx-message-chat",
  templateUrl: "./message-chat.component.html",
  styleUrls: ["./message-chat.component.scss"],
})
export class MessageChatComponent implements OnInit {
  @Input() input_message: string = "";
  @Input() disabled: boolean = false;
  @Output() send_message: EventEmitter<string> = new EventEmitter<string>();

  messageForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService
  ) {}

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.messageForm = this._formBuilder.group({
      message: new FormControl(
        { value: this.input_message, disabled: this.disabled },
        [Validators.required]
      ),
      // message: new FormControl("", [Validators.required]),
    });
  }

  // get f() {
  //   return this.messageForm.controls;
  // }

  // public getError(controlName: string): string {
  //   let error = '';
  //   const control = this.messageForm.get(controlName);
  //   if (control.touched && control.errors != null) {
  //     error = JSON.stringify(control.errors);
  //   }
  //   return error;
  // }

  sendMessage() {
    if (this.messageForm.invalid) {
      return;
    }
    this.send_message.emit(this.messageForm.value);
    this.messageForm.reset();
  }
}
