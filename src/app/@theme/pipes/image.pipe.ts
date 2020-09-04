import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../services/services.index";

@Pipe({ name: "imagesafe", pure: false })
export class ImageSafe {
  constructor(
    private _userService: UserService,
    private sanitizer: DomSanitizer
  ) {}

  transform(name: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(name);
    // return (
    //   this._userService.loadPhoto(name).subscribe((resp) => {
    //     // this.sanitizer.bypassSecurityTrustResourceUrl(resp);
    //     return resp;
    //   }),
    //   (err) => null
    // );
    // return null;
  }
}
