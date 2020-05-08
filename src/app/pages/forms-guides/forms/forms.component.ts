import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsGuidesService } from '../../../services/services.index';
import { FormsGuides } from '../../../models/FormsGuides';

@Component({
  selector: 'ngx-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  id_document: string;
  form_guide: FormsGuides;
  documentUrl: string = './assets/documents/';
  spinner: Boolean = this._formsGuidesService.spinner;


  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute,
    private _formsGuidesService: FormsGuidesService
  ) {
    this._activateRoute.params.subscribe((params) => {
      this.id_document = params['id_document'];
    });
  }

  ngOnInit() {
    this._formsGuidesService.getFormGuideById(this.id_document).subscribe((response) => {
      this.form_guide = response;
    })
  }

  download() {
    this._formsGuidesService.getFormGuideFile(this.form_guide);
  }

  goback() {
    this._router.navigate(['/pages/forms-guides']);
  }
}
