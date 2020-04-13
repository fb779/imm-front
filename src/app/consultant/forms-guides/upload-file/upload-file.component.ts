import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styles: [`
    input[type="file"] {
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
  @ViewChild('inputFile', {static: false}) inputFile: ElementRef;
  @ViewChild('labelFile', {static: false}) labelFile: ElementRef;

  // variables de entrada por atrbutos html
  @Input('title') title: string = 'Browser your file';
  @Input('list') listFiles: Array<File> = [];

  // variables de salida emitidas por el componente
  // @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @Output() file: EventEmitter<any> = new EventEmitter();

  // types permited
  ext: string[] = [ 'pdf' ];

  maxSize: number ;

  visible: boolean = true;

  spinner: boolean = false;

  fileUpload = null;
  name: string = '';
  comment: string = '';

  constructor() { }

  ngOnInit() {
  }

  seleccionarImagen( archivo: File ){
    console.log(archivo);
    this.name = '';

    if ( !archivo ){
      console.log('without file');
      this.clearFile();
      return;
    }

    if ( !this.validType(archivo.type) ){
      console.log("File isn't authorizing");
      this.clearFile();
      return;
    }

    if ( this.validExistFile( archivo , this.listFiles) ){
      console.log("The file was uploaded");
      this.clearFile();
      return;
    }

    this.fileUpload = archivo;
    this.name = archivo.name;
    // console.log('Archivo autorizado',archivo);
  }

  validType( type: string ){
    let inc = this.ext.filter((el)=>{
      return type.includes(el);
    });
    // console.log(inc);
    return inc.length > 0;
  }

  validMaxSize( size: string ){
    return false;
  }

  validExistFile( file: File, list: Array<File>){
    let exist = list.filter((el)=>{
      return file.name == el.name;
    });
    // console.log('existe el archivo', exist);
    return exist.length > 0;
  }

  clearFile(){
    this.fileUpload = null;
    this.name = '';
    this.comment = '';
    this.inputFile.nativeElement.value = '';
  }

  uploadDocument(){
    this.spinner = true;
    setTimeout(()=>{
      console.log('Uploaded file', this.name);
      // this.visible = false;
      this.file.emit( this.name );
      this.clearFile();
      this.spinner = false;
    }, 2500);
  }
}
