import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsGuides } from '../../../models/FormsGuides';

@Component({
  selector: 'ngx-card-documents',
  templateUrl: './card-documents.component.html',
  styleUrls: ['./card-documents.component.scss']
})
export class CardDocumentsComponent implements OnInit {

  @Input('form_guide') form_guide: FormsGuides;

  extension: string = 'gen'

  constructor(private _router: Router) { }

  ngOnInit() {
    this.extension = this.form_guide.name.split('.')[1];
  }

  open(e) {
    this._router.navigate(['/pages/forms-guides', this.form_guide._id]);
  }

}
