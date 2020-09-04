import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../models/User";
import { roles } from "../../config/config";
import { UserService } from "../../services/services.index";

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: User = this._userService.user;
  roles = roles;

  constructor(private _userService: UserService) {}

  ngOnInit() {}

  updatedUser(userUpdated: User) {
    this.user = userUpdated;
    this._userService.saveStorage(userUpdated);
  }

  updatedUserPhoto(userUpdated: User) {
    this.user.img = userUpdated.img;
    this._userService.saveStorage(this.user);
    this._userService.loadPhoto(this.user.img).subscribe();
  }
}
