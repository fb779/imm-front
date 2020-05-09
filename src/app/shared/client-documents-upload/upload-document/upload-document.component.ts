import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
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

  imagenSubir = null;
  name: string = '';

  constructor() { }

  ngOnInit() {
    this.title = this.document_file.name

  }

  clearFile() {
    this.imagenSubir = null;
    this.name = '';
    this.inputFile.nativeElement.value = '';
    this.spinner = false;
  }

  seleccionarImagen(archivo: File) {
    console.log(archivo);
    this.name = '';

    if (!archivo) {
      console.log('without file');
      this.imagenSubir = null;
      return;
    }

    if (!this.validType(archivo.type)) {
      console.log("File isn't authorizing");
      this.imagenSubir = null;
      this.inputFile.nativeElement.value = '';
      return;
    }

    this.imagenSubir = archivo;
    this.name = archivo.name;
    console.log('Archivo autorizado', archivo);
  }

  validType(type: string) {
    let inc = this.ext.filter((el) => {
      return type.includes(el);
    });
    console.log(inc);
    return inc.length > 0;
  }

  validMaxSize(size: string) {
    return false;
  }

  uploadDocument() {
    setTimeout(() => {
      console.log('Uploaded file', this.name);
      this.clearFile();
    }, 3000);
  }

  desabilitar() {
    this.input_enabled = !this.input_enabled;
    this.spinner = !this.spinner;
  }
}
