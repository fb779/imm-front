import { Component, OnInit, Input } from "@angular/core";
import { UserProcessService } from "../../../services/services.index";
import { User } from "../../../models/User";

@Component({
  selector: "ngx-card-consultant",
  templateUrl: "./card-consultant.component.html",
  styleUrls: ["./card-consultant.component.scss"],
})
export class CardConsultantComponent implements OnInit {
  @Input() consultant: User;
  img: string = "assets/images/person-profile.svg";
  constructor(private _userProcessServices: UserProcessService) {}

  ngOnInit() {
    if (this.consultant.img) {
      this._userProcessServices
        .loadPhoto(this.consultant.img)
        .subscribe((foto: string) => (this.img = foto));
    }
  }
}
