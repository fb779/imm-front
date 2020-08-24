import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NbLoginComponent, NbAuthService } from "@nebular/auth";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  ngOnInit() {}
}
