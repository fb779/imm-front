import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  @Input('title') title: string;
  @Input('processo') process: string = 'nada';
  // @ViewChild('deleteFile', {static:true}) button: ElementRef;
  // @ViewChild('deleteFile', {static: true}) button: ElementRef;

  spinner: Boolean = false;

  files: Array<any> = [
    // {
    //   id: 'j12b3jh12jg3j1',
    //   process: '98s7f9s87df9s',
    //   client: 'sd7f9s7df879sd',
    //   name: 'form-IJ242.pdf',
    //   version: '1',
    // }
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.process);
  }

  addFile(event){
    console.log('Se recibio el file',event);
    this.files.push({
      id: moment().unix().toString(),
      name: event,
    });
  }

  deleteFile( file: any ){
    this.spinner = true;
    setTimeout(() => {
      this.files = this.files.filter((el)=>{
        if ( el.id === file.id ){
          return false;
        }
        return true;
      });
      this.spinner = false;
    }, 3000);
  }
}
