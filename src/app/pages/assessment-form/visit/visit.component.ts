import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { Title } from '../../../models/Titlel';
import { Country } from '../../../models/Country';
import { status } from '../../../config/config';

import {
  AssessmentFormService,
  SidebarService,
  UserProcessService
} from '../../../services/services.index';


@Component({
  selector: 'ngx-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  // forma: FormGroup;

  // optTitles: Title[] = [];
  // optSex = [];
  // optYesNo = [];
  // optCountries: Country[] = [];
  // optStatus = []
  // optProvinces = [];
  // optMaritalStatus = [];
  // optPropousVisit = [];
  // optStayCanada = [];

  id: string;
  process: any;

  constructor(
    private _router: Router, private _activatedRoute: ActivatedRoute,
    // public _sidebarServices: SidebarService,
    private _porcessServices: UserProcessService,
    // private _asf: AssessmentFormService,
  ){
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    // this.forma = new FormGroup({
    //   '_id': new FormControl('nuevo'),
    //   // 'user': new FormControl(''),
    //   'process': new FormControl(this.id, [Validators.required]),
    //   'title': new FormControl('', [Validators.required]),
    //   'sex': new FormControl('', [Validators.required]),
    //   'first_name': new FormControl('', [Validators.required]),
    //   'last_name': new FormControl('', [Validators.required]),
    //   // 'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")], [this.existeEmail]),
    //   'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    //   'telephone': new FormControl('', [Validators.required, Validators.pattern("[0-9]*$")]),
    //   'country_citizenship': new FormControl('', [Validators.required]),
    //   'other_citizenship': new FormControl('', []),
    //   'country_residence': new FormControl('', [Validators.required]),
    //   'status_residence': new FormControl('', [Validators.required]),
    //   // 'birthday': new FormControl('', [Validators.required]),
    //   'age': new FormControl('', [Validators.required, Validators.min(0), Validators.max(99)]),

    //   'destiny': new FormControl('', [Validators.required]),
    //   'marital_status': new FormControl('', [Validators.required]),
    //   'number_children': new FormControl('', [Validators.min(0), Validators.max(99)]),
    //   'spouse_accompanying': new FormControl('', []),
    //   'purpose_visit': new FormControl('', [Validators.required]),
    //   'letter_invitation': new FormControl('', [Validators.required]),
    //   'stay_canada': new FormControl('', [Validators.required]),
    //   'funds': new FormControl('', [Validators.required]),
    //   'disease': new FormControl('', [Validators.required]),
    //   'criminal_act': new FormControl('', [Validators.required]),
    //   'refuse_canada': new FormControl('', [Validators.required]),
    //   'comments': new FormControl('', []),
    // });

    // this.forma.controls['marital_status'].valueChanges.subscribe( (data:any) => {
    //   this.forma.get('number_children').reset();
    //   this.forma.get('spouse_accompanying').reset();
    //   // this.forma.get('number_children').setValidators([Validators.required, Validators.min(0), Validators.max(99)]);
    //   this.forma.get('number_children').enable();
    //   this.forma.get('spouse_accompanying').enable();
    //   if (!data || data==1 ){
    //     this.forma.get('number_children').reset();
    //     this.forma.get('spouse_accompanying').reset();
    //     // this.forma.get('number_children').setValidators([Validators.min(0), Validators.max(99)]);
    //     this.forma.get('number_children').disable()
    //     this.forma.get('spouse_accompanying').disable()
    //     // this._sidebarServices.changeIsHiddenItem('Family', true);
    //   }
    //   // else {

    //   //   // this._sidebarServices.changeIsHiddenItem('Family', false);
    //   // }
    // });

    // this._asf.getTitles().subscribe( (data)=>{
    //   this.optTitles = data;
    // } );

    // this._asf.getSex().subscribe( (data)=>{
    //   this.optSex = data;
    // } );

    // this._asf.getYesNo().subscribe( (data)=>{
    //   this.optYesNo = data;
    // } );

    // this._asf.getCountries().subscribe( (data)=>{
    //   this.optCountries = data;
    // } );

    // this._asf.getStatus().subscribe( (data)=>{
    //   this.optStatus = data;
    // } );

    // this._asf.getProvinces().subscribe( (data)=>{
    //   this.optProvinces = data;
    // } );

    // this._asf.getMaritalStatus().subscribe( (data)=>{
    //   this.optMaritalStatus = data;
    // } );

    // this._asf.getPropousVisit().subscribe( (data)=>{
    //   this.optPropousVisit = data;
    // } );

    // this._asf.getStayCanada().subscribe( (data)=>{
    //   this.optStayCanada = data;
    // } );
  }

  ngOnInit() {
    this._porcessServices.getUserProcess( this.id ).subscribe((process)=>{
      // console.log('carga del proceso del usuario', process);
      this.process = process;

      // if( this.process && this.process.status !== status.active ){

      //   this._porcessServices.getUserForm(this.id).subscribe((dt) => {
      //     // console.log('formulario asociado', dt);
      //     let ndt = dt;

      //     this.forma.setValue(ndt);
      //   });
      // }
    });
  }

  // // Validacion perosnaliada
  // noNombre( control: FormControl ): { [s:string]:boolean }{
  //   if( control.value === "fabian" ){
  //     return {
  //       nonombre: true
  //     }
  //   }
  //   return null;
  // }

  // // Validacion perosnaliada
  // noIguales( control: FormControl ): { [s:string]:boolean }{
  //   let forma:any = this;
  //   if( control.value !== forma.controls['password1'].value ){
  //     return {
  //       noiguales: true
  //     }
  //   }
  //   return null;
  // }

  // // validacion asincrona del usuario
  // existeUsuario( control: FormControl ): Promise<any>|Observable<any> {
  //   // console.log(control);
  //   let proemsa = new Promise(
  //     (resolve, reject) => {
  //       setTimeout(()=>{
  //         // console.log('llegada de la informacion');
  //         if (control.value.toLowerCase() === "fabian"){
  //           resolve (null);
  //         } else {
  //           resolve({ existe: true} );
  //         }
  //       }, 1000);
  //     }
  //   );
  //   return proemsa;
  // }

  // // validacion asincrona del usuario
  // existeEmail( control: FormControl ): Promise<any>|Observable<any> {
  //   // console.log(control);
  //   let proemsa = new Promise(
  //     (resolve, reject) => {
  //       setTimeout(()=>{
  //         // console.log('llegada de la informacion');
  //         if (control.value.toLowerCase().includes('fabian')){
  //           // console.log('Problem');
  //           resolve({ existe: true} );
  //         } else {
  //           // console.log('No problem');
  //           resolve (null);
  //         }
  //       }, 1000);
  //     }
  //   );
  //   return proemsa;
  // }

  // guardar(){
  //   if ( this.forma.invalid ){
  //     alert('Fomr is invalid');
  //     // console.log(this.forma.errors);
  //     return;
  //   }
  //   // console.log('Fomrulario',this.forma);
  //   // console.log('Valores',this.forma.value);
  //   this._porcessServices.setForm(this.process, this.forma.value).subscribe((resp)=>{
  //     // this._router.navigate(['pages/assessment-form'])
  //     // console.log(resp);
  //     // console.log('url actual',this._router.url);
  //     // this._router.navigate([this._router.url]);
  //     this._router.navigate(['pages', 'assessment-form']);
  //   });
  // }

}
