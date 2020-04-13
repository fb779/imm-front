import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProcessService } from '../../services/services.index';
import { Process } from '../../models/Process';
import { status, visa_categories } from '../../config/config';

@Component({
  selector: 'ngx-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit, OnDestroy {

  loading = false;
  process: Process;
  id_process : string;
  type_visa: string = '';
  visa_categories = visa_categories;
  status = status;


  constructor( private _router: Router, private _activatedRoute: ActivatedRoute, private _processServices: UserProcessService ) {
    this.loading = true;
    this._activatedRoute.params.subscribe((params) => {
      this.id_process = params['id'];
      this._processServices.getUserProcess( this.id_process ).subscribe((resp: any)=>{
        this.process = resp;
        this.type_visa = this.process.visa_category.name;
        this.loading = false;
      })
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // console.log('Destruccion del elemento');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  // changeForm(){

  //   if ( this.type_visa === visa_categories.visitor ){
  //     this.type_visa = visa_categories.study;
  //     return;
  //   }

  //   if ( this.type_visa === visa_categories.study ){
  //     this.type_visa = visa_categories.visitor;
  //     return;
  //   }

  // }

}
