import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-documents',
  templateUrl: './card-documents.component.html',
  styleUrls: ['./card-documents.component.scss']
})
export class CardDocumentsComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

  open(e){
    console.log(e);
  }

}
