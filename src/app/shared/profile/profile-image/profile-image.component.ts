import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../models/User";

@Component({
  selector: "ngx-profile-image",
  templateUrl: "./profile-image.component.html",
  styleUrls: ["./profile-image.component.scss"],
})
export class ProfileImageComponent implements OnInit {
  @Input("user") user: User;
  constructor() {}

  ngOnInit() {}
}
