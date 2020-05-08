import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';

import * as moment from 'moment';
import { Process } from '../../models/Process';
import { FormsGuidesService } from '../../services/forms-guides/forms-guides.service';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  @Input('title') title: string;
  @Input('processo') process: Process;
  @Input('type') type_document: string;

  // @ViewChild('deleteFile', {static:true}) button: ElementRef;
  // @ViewChild('deleteFile', {static: true}) button: ElementRef;

  spinner: Boolean = false;

  files: Array<any> = [];

  comment = '';

  constructor(private _formsGuidesService: FormsGuidesService) { }

  ngOnInit() {
    this.loadFiles();
  }

  loadFiles() {
    this._formsGuidesService.getFormsGuides(this.process, this.type_document).subscribe((response: any) => {
      this.files = response;
    });

  }

  addFile(event) {
    this.loadFiles();
    this.comment = '';

    // this.files.push({
    //   id: moment().unix().toString(),
    //   name: event.name,
    // });
  }

  deleteFile(file: any) {
    this.spinner = true;
    this._formsGuidesService.deleteFormGuide(file._id).subscribe((response) => {
      this.loadFiles();
      setTimeout(() => {
        this.spinner = false;
      }, 1000);
    })

    // setTimeout(() => {
    //   this.files = this.files.filter((el) => {
    //     if (el.id === file.id) {
    //       return false;
    //     }
    //     return true;
    //   });
    //   this.spinner = false;
    // }, 3000);
  }
}
