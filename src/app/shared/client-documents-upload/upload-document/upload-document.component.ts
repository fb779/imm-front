import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  UploadFileService,
  ToastrService,
} from "../../../services/services.index";
import { documentStatus } from "../../../config/config";
import { Document } from "../../../models/Document";

@Component({
  selector: "ngx-upload-document",
  templateUrl: "./upload-document.component.html",
  styleUrls: ["./upload-document.component.scss"],
})
export class UploadDocumentComponent implements OnInit {
  // referencia al html para editar elementos del DOOM "#nameElement"
  @ViewChild("inputFile", { static: false }) inputFile: ElementRef;
  @ViewChild("labelFile", { static: false }) labelFile: ElementRef;

  // variables de entrada por atrbutos html
  @Input("document") document_file: Document;

  // variables de salida emitidas por el componente
  @Output() upload_file: EventEmitter<Boolean> = new EventEmitter();

  docStatus = documentStatus;
  title: string = "Browse your file";

  input_enabled: Boolean = false;
  spinner: Boolean = false;

  // types permited
  ext: string[] = ["pdf", "image"];
  maxSize: Number = 2;

  file_upload = null;
  name: string = "";

  constructor(
    private _upFileService: UploadFileService,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.title = this.document_file.name;
    this.input_enabled = !(
      this.document_file.status === documentStatus.create ||
      this.document_file.status === documentStatus.rejected
    );
  }

  clearFile() {
    this.file_upload = null;
    this.name = "";
    this.inputFile.nativeElement.value = "";
    this.spinner = false;
  }

  selectFile(archivo: File) {
    this.name = "";

    if (!archivo) {
      this._toastr.toastrGenericMessage(
        "You need select a file",
        "Upload File",
        "warning"
      );
      this.clearFile();
      return;
    }

    if (!this.validType(archivo.type)) {
      this._toastr.toastrGenericMessage(
        `File isn't authorizing`,
        "Upload File",
        "warning"
      );
      this.clearFile();
      return;
    }

    if (!this.validMaxSize(archivo.size)) {
      this._toastr.toastrGenericMessage(
        `The file is bigger than the maximum allowed, the maximum allowed is ${this.maxSize}Mb`,
        "Upload File",
        "warning"
      );
      this.clearFile();
      return;
    }

    this.file_upload = archivo;
    this.name = archivo.name;
  }

  validType(type: string) {
    let inc = this.ext.filter((el) => {
      return type.includes(el);
    });
    return inc.length > 0;
  }

  // validar si el tamaño del archivo es menor que el maximo permitido
  validMaxSize(size: number) {
    const fileSize = Number(size) / 1000 / 1000; // convertir a mb

    return fileSize < this.maxSize;
  }

  uploadDocument() {
    this.spinner = true;
    this._upFileService
      .uploadDocument(this.file_upload, this.document_file._id)
      .subscribe(
        (response) => {
          this._toastr.toastrGenericMessage(
            "Successfull file upload",
            "Upload File",
            "success"
          );
          this.clearFile();
          this.spinner = false;
          this.upload_file.emit(true);
        },
        (err) => {
          this._toastr.toastrGenericMessage(
            "Filed upload",
            "Upload File",
            "danger"
          );
          this.spinner = false;
        }
      );
  }

  desabilitar() {
    this.input_enabled = !this.input_enabled;
    this.spinner = !this.spinner;
  }

  lastComment(comments) {
    return comments.length > 0 ? comments[comments.length - 1].comment : "";
  }

  get getStatus() {
    let className = "text-white ";
    let icon = "";
    switch (this.document_file.status) {
      case this.docStatus.create:
        className += "bg-info";
        icon = "alert-circle-outline";
        break;
      case this.docStatus.uploaded:
        className += "bg-primary";
        icon = "checkmark-circle-outline";
        break;
      case this.docStatus.approved:
        className += "bg-success";
        icon = "done-all-outline";
        break;
      case this.docStatus.rejected:
        className += "bg-warning";
        icon = "alert-triangle-outline";
        break;
      default:
        className = "";
        break;
    }

    return { className, icon };
  }
}
