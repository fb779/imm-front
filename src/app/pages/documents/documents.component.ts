import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {



  items = [
    {name: 'Passport'},
    {name: 'Letter'},
    {name: 'Identification Document'},
    {name: 'Certificate High school'},
  ]

  images: File[] = [];

  constructor() { }

  ngOnInit() {
  }


  seleccionarImagen( archivo ){
    console.log('archivo', archivo);
    console.log(archivo.target.value);

    // let imagenSubir = null;
    // if ( !archivo ){
    //   console.log('sin archivo');
    //   imagenSubir = null;
    //   return;
    // }

    // console.log('Tipo', archivo.type);
    // if ( !archivo.type.includes('pdf') ){
    //   console.log('No es un pdf');
    //   // swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
    //   imagenSubir = null;
    //   return;
    // }








  }


}
