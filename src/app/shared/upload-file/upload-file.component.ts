import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { UploadFileService } from '../../services/services.index';
import { Process } from '../../models/Process';
import { ToastrService } from '../../services/toastr/toastr.service';

@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styles: [`
    input[type="file"] {
      width: 100%;
      height: auto;
      /* height: 100%; */
    }

    textarea {
      resize: none;
    }
  `]
})
export class UploadFileComponent implements OnInit {

  // referencia al html para editar elementos del DOOM "#nameElement"
  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;
  @ViewChild('labelFile', { static: false }) labelFile: ElementRef;

  // variables de entrada por atrbutos html
  @Input('type_upload') type_upload: string; // define el tipo de carga para el documento, Formulario, Guia o documento
  @Input('title') title: string = 'Browser your file';
  @Input('list') listFiles: Array<File> = [];
  @Input('comment') comment: string;
  @Input('process') process: Process;

  // variables de salida emitidas por el componente
  @Output() file: EventEmitter<any> = new EventEmitter();

  // types permited
  ext: string[] = ['pdf', 'image'];
  maxSize: number;
  visible: boolean = true;
  spinner: boolean = false;

  fileUpload = null;
  name: string = '';
  // comment: string = '';

  constructor(private _upFileservice: UploadFileService, private _toastr: ToastrService) { }

  ngOnInit() {
    // console.log('process', this.process);
    // console.log('Tipo de carga', this.type_upload);
  }

  seleccionarImagen(archivo: File) {
    // console.log(archivo);
    this.name = '';

    if (!archivo) {
      console.log('without file');
      this._toastr.toastrGenericMessage('You need select a file', 'Upload File','warning')
      this.clearFile();
      return;
    }

    if (!this.validType(archivo.type)) {
      console.log("File isn't authorizing");
      this._toastr.toastrGenericMessage(`File is invalid to upload`, 'Upload File','warning')
      this.clearFile();
      return;
    }

    if (this.validExistFile(archivo, this.listFiles)) {
      console.log("The file was uploaded");
      this._toastr.toastrGenericMessage(`The file was uploaded`, 'Upload File','warning')
      this.clearFile();
      return;
    }

    this.fileUpload = archivo;
    this.name = archivo.name;
    // console.log('Archivo autorizado',archivo);
  }

  validType(type: string) {
    let inc = this.ext.filter((el) => {
      return type.includes(el);
    });
    // console.log(inc);
    return inc.length > 0;
  }

  validMaxSize(size: string) {
    return false;
  }

  validExistFile(file: File, list: Array<File>) {
    let exist = list.filter((el) => {
      return file.name == el.name;
    });
    // console.log('existe el archivo', exist);
    return exist.length > 0;
  }

  clearFile() {
    this.fileUpload = null;
    this.name = '';
    // this.comment = '';
    this.inputFile.nativeElement.value = '';
    this.spinner = false
  }

  uploadDocument() {
    this.spinner = true;
    this._upFileservice.uploadFormsGuides(this.fileUpload, this.type_upload, this.process, this.comment).subscribe(
      (response: any) => {
        // console.log(response);
        this._toastr.toastrGenericMessage('Upload file successfull', 'Upload File','success')
        this.file.emit(this.fileUpload);
        this.clearFile();
      },
      (err)=> this._toastr.toastrGenericMessage('Upload file failed', 'Upload File','danger')
      );
  }
}
