import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/Document';
import { ConsultantService } from '../../services/services.index';
import { CheckList } from '../../models/CheckList';
import { Process } from '../../models/Process';

@Component({
  selector: 'ngx-select-documents',
  templateUrl: './select-documents.component.html',
  styleUrls: ['./select-documents.component.scss']
})
export class SelectDocumentsComponent implements OnInit {

  @Input('process') process: Process;

  type_visa: string;

  otherDocument: string = '';

  listOfDocuments: CheckList[] = [];
  listOfDocuments2: Document[] = [];

  documentRequired: Array<any> = [];
  otherDocuments: Array<any> = [];

  constructor( private _consultatnService: ConsultantService ) {
  }

  ngOnInit() {
    this.type_visa = this.process.visa_category.name;
    this._consultatnService.getDocumentsOfConsultant(this.type_visa).subscribe((data: CheckList[])=>{
      this.listOfDocuments = data;
    });
  }

  toggle( e: boolean) {
    this.documentRequired = this.listOfDocuments.filter((item)=>{
      return item.required;
    }).map((el)=>{
      return {
        _id: el._id,
        name: el.name,
        status: el.required
      }
    });
  }

  addOther( ){
    // console.log(this.otherDocument);

    if( !this.otherDocument ){
      console.log('the field is required');
      return;
    }

    if ( !this.validUnique( this.otherDocument, this.otherDocuments ) ){
      console.log('the document already exist');
      return;
    }

    // let dt = new Object({"name": this.otherDocument.trim()});
    // this.otherDocuments.push(dt);

    this.otherDocuments.push({"name": this.otherDocument.trim()});

    this.otherDocument = '';
  }

  removeOther( other ){
    this.otherDocuments = this.otherDocuments.filter((el)=>{
      return !(el.name === other.name)
    });
  }

  private validUnique( document, listDocuments ){
    let list = listDocuments.filter((el)=>{
      return el.name == document;
    });

    return (list.length > 0) ? false : true;

  }
}
