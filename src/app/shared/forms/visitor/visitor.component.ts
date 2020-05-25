import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { status } from '../../../config/config';
import { Title } from '../../../models/Titlel';
import { Country } from '../../../models/Country';

import {
  AssessmentFormService,
  SidebarService,
  UserProcessService,
  ToastrService
} from '../../../services/services.index';

@Component({
  selector: 'ngx-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  @Input('process') process: any;
  id: string;
  submitted = false;
  status = status;
  url: string[];
  // client: FormGroup;
  forma: FormGroup;

  optTitles: Title[] = [];
  optSex = [];
  optAccompanying = [];
  optYesNo = [];
  optCountries: Country[] = [];
  optStatus = []
  optProvinces = [];
  optMaritalStatus = [];
  optPropousVisit = [];
  optStayCanada = [];

  constructor(
    private _router: Router, private _activatedRoute: ActivatedRoute,
    public _sidebarServices: SidebarService,
    private _porcessServices: UserProcessService,
    private _asf: AssessmentFormService,
    private _toastr: ToastrService,
  ) {
    this.url = this._router.url.split('/').filter(x => x.trim() !== '');

    this.forma = new FormGroup({
      '_id': new FormControl('nuevo'),
      // 'process': new FormControl('', [Validators.required]),
      'title': new FormControl('', [Validators.required]),
      'sex': new FormControl('', [Validators.required]),
      'first_name': new FormControl('', [Validators.required]),
      'last_name': new FormControl('', [Validators.required]),
      // 'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")], [this.existeEmail]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'telephone': new FormControl('', [Validators.required, Validators.pattern("[0-9]*$")]),
      'country_citizenship': new FormControl('', [Validators.required]),
      'other_citizenship': new FormControl('', []),
      'country_residence': new FormControl('', [Validators.required]),
      'status_residence': new FormControl('', [Validators.required]),
      'status_residence_other': new FormControl({value: '', disabled: true}, [Validators.required]),
      'age': new FormControl('', [Validators.required, Validators.min(0), Validators.max(99)]),
      'destiny': new FormControl('', [Validators.required]),
      'marital_status': new FormControl('', [Validators.required]),
      'number_accompanying': new FormControl(0, [Validators.required]),
      'purpose_visit': new FormControl('', [Validators.required]),
      'letter_invitation': new FormControl('', [Validators.required]),
      'stay_canada': new FormControl('', [Validators.required]),
      'funds': new FormControl('', [Validators.required]),
      'disease': new FormControl('', [Validators.required]),
      'criminal_act': new FormControl('', [Validators.required]),
      'refuse_canada': new FormControl('', [Validators.required]),
      'comments': new FormControl('', []),
    });

    this.forma.controls['status_residence'].valueChanges.subscribe((value: any) => {
      if (value == 5) {
        this.forma.get('status_residence_other').enable();
      } else {
        this.forma.get('status_residence_other').disable();
        this.forma.get('status_residence_other').reset();
      }
    });

    this._asf.getTitles().subscribe((data) => {
      this.optTitles = data;
    });

    this._asf.getSex().subscribe((data) => {
      this.optSex = data;
    });

    this._asf.getAccompanying().subscribe((data) => {
      this.optAccompanying = data;
    });

    this._asf.getYesNo().subscribe((data) => {
      this.optYesNo = data;
    });

    this._asf.getCountries().subscribe((data) => {
      this.optCountries = data;
    });

    this._asf.getStatus().subscribe((data) => {
      this.optStatus = data;
    });

    this._asf.getProvinces().subscribe((data) => {
      this.optProvinces = data;
    });

    this._asf.getMaritalStatus().subscribe((data) => {
      this.optMaritalStatus = data;
    });

    this._asf.getPropousVisit().subscribe((data) => {
      this.optPropousVisit = data;
    });

    this._asf.getStayCanada().subscribe((data) => {
      this.optStayCanada = data;
    });
  }

  ngOnInit() {
    if (this.process && this.process.status !== status.active) {
      this._porcessServices.getUserForm(this.process._id).subscribe((dt) => {
        this.forma.setValue(dt);
      });
    }
  }

  get f() { return this.forma.controls; }

  guardar() {
    this.submitted = true;

    if (this.forma.invalid) {
      this._toastr.toastrGenericMessage(`Form is nvalid`, '', 'warning');
      alert('Fomr is invalid');
      return;
    }

    if (this.f._id.value === 'nuevo') {
      this._porcessServices.setForm(this.process, this.forma.value).subscribe((resp: any) => {
        if (resp.ok) {
          this._toastr.toastrGenericMessage(`Saved successfull`, 'Form save', 'success');
          this._router.navigate([this.url[0], this.url[1]]);
          return;
        }
      });
    } else {
      this._porcessServices.updateForm(this.process, this.forma.value).subscribe((resp: any) => {
        if ( resp.ok ){
          this._toastr.toastrGenericMessage(`Saved successfull`, 'Form save', 'success');
          // this._router.navigate([this.url[0], this.url[1]]);
          return;
        }
      });
    }
  }
}
