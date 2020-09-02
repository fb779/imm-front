import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  UserProcessService,
  UserService,
} from "../../../services/services.index";
import { Process } from "../../../models/Process";

@Component({
  selector: "ngx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  list_process: Process[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _processServices: UserProcessService
  ) {
    this._processServices.getUserProcesses().subscribe(
      (processes) => {
        // console.log('listado de procesos: ', processes );
        this.list_process = processes;
      },
      (err) => {
        console.log("no se cargaron los procesos");
      }
    );
  }

  ngOnInit() {}

  goWebChat(process: string) {
    // this._router.navigate(['',process]);
    this._router.navigate(["/pages/messages/", process]);
  }
}
