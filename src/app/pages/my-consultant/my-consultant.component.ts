import { Component, OnInit } from "@angular/core";
import { UserProcessService } from "../../services/services.index";

@Component({
  selector: "ngx-my-consultant",
  templateUrl: "./my-consultant.component.html",
  styleUrls: ["./my-consultant.component.scss"],
})
export class MyConsultantComponent implements OnInit {
  consultants: any[] = [];

  constructor(private _processServices: UserProcessService) {}

  ngOnInit() {
    this._processServices.getUserProcesses().subscribe((list_process) => {
      this.consultants = list_process
        .filter((el) => el.consultant)
        .map((el) => el.consultant);
    });
  }
}
