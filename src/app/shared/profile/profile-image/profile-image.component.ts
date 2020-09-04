import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { User } from "../../../models/User";
import {
  ToastrService,
  UploadFileService,
} from "../../../services/services.index";
import { first } from "underscore";
import { UsersService } from "../../../admin/users/users.service";
// import { UploadFileService } from '../../../services/upload/upload-file.service';

@Component({
  selector: "ngx-profile-image",
  templateUrl: "./profile-image.component.html",
  styleUrls: ["./profile-image.component.scss"],
})
export class ProfileImageComponent implements OnInit {
  @Input("user") user: User;
  @Output() uploadImage: EventEmitter<User> = new EventEmitter<User>();
  @ViewChild("inputFile", { static: false }) inputFile: ElementRef;
  @ViewChild("labelFile", { static: false }) labelFile: ElementRef;

  title: string = "Browse your file";

  input_enabled: Boolean = false;
  spinner: Boolean = false;

  // types permited
  ext: string[] = ["image"];

  reader = new FileReader();

  file_upload = null;
  name: string = "";
  imagenTemp: string | ArrayBuffer;
  svg = false;

  constructor(
    private _toastr: ToastrService,
    private _upFileservice: UploadFileService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // this.imagenTemp = this.user.img || null;
  }

  clearFile() {
    this.file_upload = null;
    this.name = "";
    this.inputFile.nativeElement.value = "";
    this.spinner = false;
    this.imagenTemp = null;
  }

  seleccionarImagen(archivo: File) {
    this.name = "";

    if (!archivo) {
      this._toastr.toastrGenericMessage(
        "You need select a file",
        "Upload File",
        "warning"
      );
      this.file_upload = null;
      return;
    }

    if (!this.validType(archivo.type)) {
      this._toastr.toastrGenericMessage(
        `File isn't authorizing`,
        "Upload File",
        "warning"
      );
      this.file_upload = null;
      this.inputFile.nativeElement.value = "";
      return;
    }

    this.file_upload = archivo;
    this.name = archivo.name;

    this.reader.readAsDataURL(archivo);

    this.reader.onloadend = () => {
      this.imagenTemp = this.reader.result;
    };
  }

  validType(type: string) {
    let inc = this.ext.filter((el) => {
      return type.includes(el);
    });
    return inc.length > 0;
  }

  validMaxSize(size: string) {
    return false;
  }

  uploadDocument() {
    this.spinner = true;

    this._upFileservice
      .uploadPhoto(this.file_upload, this.user._id)
      .subscribe((resp: any) => {
        if (resp.ok) {
          this._toastr.toastrGenericMessage(
            `Updated information successfull`,
            "Updated Profile",
            "success"
          );
          this.clearFile();
          this.spinner = false;
          this.uploadImage.emit(resp.data);
        }
      });
  }

  desabilitar() {
    this.input_enabled = !this.input_enabled;
    this.spinner = !this.spinner;
  }
}
