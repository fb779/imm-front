import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../models/User";

@Component({
  selector: "ngx-card-consultant",
  templateUrl: "./card-consultant.component.html",
  styleUrls: ["./card-consultant.component.scss"],
})
export class CardConsultantComponent implements OnInit {
  @Input() consultant: User;
  img: string = "assets/images/person-profile.svg";
  constructor() {}

  ngOnInit() {
    if (this.consultant.img) {
      this.img = this.consultant.img;
    }
  }
}
