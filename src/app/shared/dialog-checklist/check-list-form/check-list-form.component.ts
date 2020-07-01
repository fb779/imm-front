import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Process } from '../../../models/Process';
import { ChecklistService, ToastrService } from '../../../services/services.index';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-check-list-form',
  templateUrl: './check-list-form.component.html',
  styleUrls: ['./check-list-form.component.scss']
})
export class CheckListFormComponent implements OnInit {

  @Input() title: string;
  @Input() process: Process;
  @Input() items: any[] = [];

  checklistFormGroup: FormGroup;
  submited = false;
  spinner = false;

  constructor(
    protected ref: NbDialogRef<CheckListFormComponent>,
    private formBuilder: FormBuilder,
    private _checklistService: ChecklistService,
    private _toastr: ToastrService,
  ) {}

  ngOnInit(){
    this.spinner = true;
    this.buildForm();
  }

  get f() { return this.checklistFormGroup.controls; }

  buildForm(){
    this.checklistFormGroup = this.formBuilder.group({
      name: ['',[Validators.required], this.existName.bind(this)],
      description: ['',[]],
      visa_categories: [{value:'', disabled:true}, [Validators.required]],
      // group: ['',[Validators.required]],
      // required: ['false',[Validators.required]],
    });

    this.checklistFormGroup.get('visa_categories').setValue(this.process.visa_category._id);
    this.spinner = false;
  }

  // Validacion perosnaliada
  // existName( control: FormControl ): { [s:string]:boolean }{
  //   // console.log('Control del campo',control.value);
  //   if( !~this.items.indexOf(control.value) ){
  //     return {
  //       existname: true
  //     }
  //   }
  //   return null;
  // }

  existName( control: FormControl ): Promise<any>|Observable<any> {
    // console.log('items de mi modal', this.items );
    let proemsa = new Promise( (resolve, reject) => {
        let rta = ~this.items.indexOf(control.value.trim().toUpperCase());
        if (rta){
          resolve({ existName:true});
        }else {
          resolve (null);
        }
      }
    );
    return proemsa;
  }

  dismiss() {
    this.ref.close();
  }

  saveChecklist(){

    if ( this.checklistFormGroup.invalid ){
      this.submited = true;
      this._toastr.toastrGenericMessage(`Form is invalid`,'Check list', 'warning');
      return;
    }

    var data = this.checklistFormGroup.value

    data.visa_categories = this.process.visa_category._id;

    this._checklistService.createCheckList(data).subscribe(
      (response)=>{
        if (response.ok) {
          this.ref.close(response.ok)
          this._toastr.toastrGenericMessage(`Save new check lsit item`,'Check list', 'success');
        }
       },
      (err) => {
        console.log(err);
        this._toastr.toastrGenericMessage(`Error to save new check lsit item`,'Check list', 'danger');
      }
    );
  }
}
