import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-card-documents',
  templateUrl: './card-documents.component.html',
  styleUrls: ['./card-documents.component.scss']
})
export class CardDocumentsComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() description: string;
  @Input() name: string;

  documentUrl: string = './assets/documents/';

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  open(e){
    this._router.navigate(['/pages/forms-guides', this.name]);
    // window.open( this.documentUrl + this.name , '_blank', '', true);
  }

}
