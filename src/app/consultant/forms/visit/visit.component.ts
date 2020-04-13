import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Title } from '../../../models/Titlel';
import { Country } from '../../../models/Country';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProcessService, AssessmentFormService, ConsultantService } from '../../../services/services.index';

@Component({
  selector: 'ngx-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  // @Input('nombre') leyenda: string = 'Leyenda personalizada';
  @Input('process') process: any;;

  forma: FormGroup;
  optTitles: Title[] = [];
  optSex = [];
  optYesNo = [];
  optCountries: Country[] = [];
  optStatus = []
  optProvinces = [];
  optMaritalStatus = [];
  optPropousVisit = [];
  optStayCanada = [];

  constructor(
    private _router: Router, private _activatedRoute: ActivatedRoute,
    private _porcessServices: ConsultantService,
    private _asf: AssessmentFormService,
  ) {
    this.forma = new FormGroup({
      '_id': new FormControl(''),
      'user': new FormControl(''),
      'process': new FormControl('', [Validators.required]),
      'title': new FormControl('', [Validators.required]),
      'sex': new FormControl('', [Validators.required]),
      'first_name': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'telephone': new FormControl('', [Validators.required, Validators.pattern("[0-9]*$")]),
      'country_citizenship': new FormControl('', [Validators.required]),
      'other_citizenship': new FormControl('', []),
      'country_residence': new FormControl('', [Validators.required]),
      'status_residence': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
      'destiny': new FormControl('', [Validators.required]),
      'marital_status': new FormControl('', [Validators.required]),
      'number_children': new FormControl('', [Validators.required]),
      'spouse_accompanying': new FormControl('', [Validators.required]),
      'purpose_visit': new FormControl('', [Validators.required]),
      'letter_invitation': new FormControl('', [Validators.required]),
      'stay_canada': new FormControl('', [Validators.required]),
      'funds': new FormControl('', [Validators.required]),
      'disease': new FormControl('', [Validators.required]),
      'criminal_act': new FormControl('', [Validators.required]),
      'refuse_canada': new FormControl('', [Validators.required]),
      'comments': new FormControl('', []),
    });

    this._asf.getTitles().subscribe( (data)=>{
      this.optTitles = data;
    } );

    this._asf.getSex().subscribe( (data)=>{
      this.optSex = data;
    } );

    this._asf.getYesNo().subscribe( (data)=>{
      this.optYesNo = data;
    } );

    this._asf.getCountries().subscribe( (data)=>{
      this.optCountries = data;
    } );

    this._asf.getStatus().subscribe( (data)=>{
      this.optStatus = data;
    } );

    this._asf.getProvinces().subscribe( (data)=>{
      this.optProvinces = data;
    } );

    this._asf.getMaritalStatus().subscribe( (data)=>{
      this.optMaritalStatus = data;
    } );

    this._asf.getPropousVisit().subscribe( (data)=>{
      this.optPropousVisit = data;
    } );

    this._asf.getStayCanada().subscribe( (data)=>{
      this.optStayCanada = data;
    } );
  }

  ngOnInit() {
    this._porcessServices.getFormProcess( this.process ).subscribe((process)=>{
      // console.log('carga del proceso del usuario', process);
      this.process = process;

      // if( this.process && this.process.status === 'FORM' ){

      //   this._porcessServices.getUserForm(this.process._id).subscribe((dt) => {
      //     let ndt = dt;
      //     this.forma.setValue(ndt);
      //   });
      // }
    });
  }

  update(){
    console.log(this.forma.value);

    if ( this.forma.invalid ){
      alert('Fomr is invalid');
      // console.log(this.forma.errors);
      return;
    }
    alert('Fomr is valid');
    return;
    // console.log('Fomrulario',this.forma);
    // console.log('Valores',this.forma.value);
    // this._porcessServices.setForm(this.forma.value).subscribe((resp)=>{
    //   this._router.navigate(['pages', 'assessment-form']);
    // });
  }
}
