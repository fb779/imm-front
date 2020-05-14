import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { UploadFileService } from '../../../services/services.index';
import { documentStatus } from '../../../config/config';
import { Document } from '../../../models/Document';



@Component({
  selector: 'ngx-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {
  // referencia al html para editar elementos del DOOM "#nameElement"
  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;
  @ViewChild('labelFile', { static: false }) labelFile: ElementRef;

  // variables de entrada por atrbutos html
  @Input('document') document_file: Document;

  // variables de salida emitidas por el componente
  @Output() upload_file: EventEmitter<Boolean> = new EventEmitter();

  title: string = 'Browse your file';

  input_enabled: Boolean = false;
  spinner: Boolean = false;

  // types permited
  ext: string[] = [
    'pdf',
    'image',
  ]

  file_upload = null;
  name: string = '';

  constructor(private _upFileService: UploadFileService) { }

  ngOnInit() {
    this.title = this.document_file.name
    this.input_enabled = !(this.document_file.status === documentStatus.create || this.document_file.status === documentStatus.rejected);
  }

  clearFile() {
    this.file_upload = null;
    this.name = '';
    this.inputFile.nativeElement.value = '';
    this.spinner = false;
  }

  seleccionarImagen(archivo: File) {
    this.name = '';

    if (!archivo) {
      console.log('without file');
      this.file_upload = null;
      return;
    }

    if (!this.validType(archivo.type)) {
      console.log("File isn't authorizing");
      this.file_upload = null;
      this.inputFile.nativeElement.value = '';
      return;
    }

    this.file_upload = archivo;
    this.name = archivo.name;
    // console.log('Archivo autorizado', archivo);
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
    this._upFileService.uploadDocument(this.file_upload, this.document_file._id).subscribe((response) => {
      // if (response.ok) {
      this.clearFile();
      this.spinner = false;
      this.upload_file.emit(true);
      // return;
      // }
    });
    // setTimeout(() => {
    //   console.log('Uploaded file', this.name);
    //   this.clearFile();
    // }, 3000);
  }

  desabilitar() {
    this.input_enabled = !this.input_enabled;
    this.spinner = !this.spinner;
  }
}
