import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Title } from '../../models/Titlel';
import { Country } from '../../models/Country';
import { Client } from '../../models/Client';
import { AssessmentFormService, FamilyService } from '../../services/services.index';
import { Process } from '../../models/Process';
import { status } from '../../config/config';

@Component({
  selector: 'ngx-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.scss']
})
export class FamilyFormComponent implements OnInit {

  @Input('process') process: Process;
  @Input('url') url: string[];
  status = status;

  clientForm: FormGroup;
  submitted = false;

  listFamiliMembers: Client[] = [];

  optRelationships = [];
  optTitles: Title[] = [];
  optSex = [];
  optCountries: Country[] = [];
  optStatus = []

  constructor(private formBuilder: FormBuilder, private _asf: AssessmentFormService, private _familyServices: FamilyService) {
    this._asf.getRelationships().subscribe( (data)=>{
      this.optRelationships = data;
    } );

    this._asf.getTitles().subscribe( (data)=>{
      this.optTitles = data;
    } );

    this._asf.getSex().subscribe( (data)=>{
      this.optSex = data;
    } );

    this._asf.getCountries().subscribe( (data)=>{
      this.optCountries = data;
    } );

    this._asf.getStatus().subscribe( (data)=>{
      this.optStatus = data;
    } );
  }

  ngOnInit() {
    this.buildForm();
    this.loadMembers();
  }

  get f() { return this.clientForm.controls; }

  /**
   * Metodo para la construccion del formlario
   */
  private buildForm(){
    this.clientForm = this.formBuilder.group({
      '_id': new FormControl(''),
      'first_name': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      'relationship': new FormControl('', [Validators.required]),
      'title': new FormControl('', [Validators.required]),
      'sex': new FormControl('', [Validators.required]),
      'country_citizenship': new FormControl('', [Validators.required]),
      'other_citizenship': new FormControl('', []),
      'country_residence': new FormControl('', [Validators.required]),
      'status_residence': new FormControl('', [Validators.required]),
      'status_residence_other': new FormControl({value: '', disabled: true}, [Validators.required]),
      'age': new FormControl('', [Validators.required, Validators.min(0), Validators.max(99)]),
    });

    // this.clientForm.get('status_residence_other').disable();

    this.clientForm.controls['status_residence'].valueChanges.subscribe( (value:any) => {

      if (value == 5){
        this.clientForm.get('status_residence_other').enable();
      } else {
        this.clientForm.get('status_residence_other').disable();
        this.clientForm.get('status_residence_other').reset();
      }
    });
  }


  loadMembers(){
    this._familyServices.getFamilyProcesses(this.process)
      .subscribe( data => this.listFamiliMembers = data );
  }

  addMember(){
    if( this.clientForm.invalid ){
      this.submitted = true;
      // alert('formulario invalido');
      return;
    }

    const client = this.clientForm.value;

    // if( client._id ){
    //   this.clientForm.reset();
    //   this.submitted = false;

    // } else {
    //   this._familyServices.newFamilyMember(this.process, this.clientForm.value).subscribe((res)=>{
    //     client['_id'] = res._id;
    //     this.loadMembers();
    //     this.clientForm.reset();
    //     this.submitted = false;
    //   })
    // }
    this._familyServices.newFamilyMember(this.process, this.clientForm.value).subscribe((res)=>{
      client['_id'] = res._id;
      this.loadMembers();
      this.clientForm.reset();
      this.submitted = false;
    })
  }

  loadToEditMember( client: Client){
    // delete client.email;
    this.clientForm.setValue(client);
  }

  updateMember( ){
    if( this.clientForm.invalid ){
      this.submitted = true;
      // alert('formulario invalido');
      return;
    }

    const client = this.clientForm.value;

    this._familyServices.editFamilyMember(this.process, this.clientForm.value)
    .subscribe((res)=>{
      if (res.ok){
        this.loadMembers();
        this.clientForm.reset();
        this.submitted = false;
      }
    })
  }

  removeMenber( client: Client ){
    this._familyServices.removeFamiliMember(this.process, client).subscribe( ()=>{
      this.loadMembers();
      this.clientForm.reset();
      this.submitted = false;
    });

  }

}
