import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-upload-file',
  templateUrl: './upload-file.component.html',
  styles: [`
  input[type="file"] {
    height: auto;
    /* height: 100%; */
  }
  `]
})
export class UploadFileComponent implements OnInit {

  // referencia al html para editar elementos del DOOM "#nameElement"
  @ViewChild('inputFile', {static: false}) inputFile: ElementRef;
  @ViewChild('labelFile', {static: false}) labelFile: ElementRef;

  // variables de entrada por atrbutos html
  @Input('title') title: string = 'Leyenda personalizada';

  // variables de salida emitidas por el componente
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @Output() porcentaje: EventEmitter<number> = new EventEmitter();

  // types permited
  ext: string[] = [
    'pdf',
    'image',
  ]

  vs: boolean = true;

  imagenSubir = null;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  eraser(){
    this.imagenSubir = null;
    this.name = '';
    this.inputFile.nativeElement.value = '';
  }

  seleccionarImagen( archivo: File ){
    console.log(archivo);
    this.name = '';

    if ( !archivo ){
      console.log('without file');
      this.imagenSubir = null;
      return;
    }

    if ( !this.validType(archivo.type) ){
      console.log("File isn't authorizing");
      this.imagenSubir = null;
      this.inputFile.nativeElement.value = '';
      return;
    }

    this.imagenSubir = archivo;
    this.name = archivo.name;
    console.log('Archivo autorizado',archivo);
  }

  validType( type: string ){
    let inc = this.ext.filter((el)=>{
      return type.includes(el);
    });
    console.log(inc);
    return inc.length > 0;
  }

  uploadDocument(){
    setTimeout(()=>{
      console.log('Uploaded file', this.name);
      this.vs = false;
    }, 3000);
  }
}
