import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { FormsGuidesService, ToastrService } from '../../services/services.index';
import { Process } from '../../models/Process';
import * as moment from 'moment';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  @Input('title') title: string;
  @Input('processo') process: Process;
  @Input('type') type_document: string;

  spinner: Boolean = false;

  files: Array<any> = [];

  comment = '';

  constructor(private _formsGuidesService: FormsGuidesService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.loadFiles();
  }

  loadFiles() {
    this._formsGuidesService.getFormsGuides(this.process, this.type_document).subscribe(
      (response: any) => {
        this.files = response;
      }
    );
  }

  addFile(event) {
    this.loadFiles();
    this.comment = '';
  }

  deleteFile(file: any) {
    this.spinner = true;
    this._formsGuidesService.deleteFormGuide(file._id).subscribe(
      (response) => {
        this.loadFiles();
        setTimeout(() => {
          this._toastr.toastrGenericMessage('Successful removal', 'Delete', 'success');
          this.spinner = false;
        }, 1000);
      },
      (err) => this._toastr.toastrGenericMessage('failed removal', 'Delete', 'danger')
    );
  }
}
