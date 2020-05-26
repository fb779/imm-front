import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormFamilyMembersComponent } from './form-family-members/form-family-members.component';
import { Process } from '../../models/Process';
import { FamilyService } from '../../services/services.index';

@Component({
  selector: 'ngx-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  @Input() process: Process;
  @Input() url:string[];

  constructor(private dialogService: NbDialogService, private _familyServices: FamilyService) { }

  ngOnInit() {
    // this._familyServices.chageProcess(this.process);
  }

  openDialog(){
    this.dialogService.open(FormFamilyMembersComponent, {
      context:{
        process: this.process,
        url: this.url
      }
    });
    // .onClose.subscribe( (res)=>{
    //   // if (res ){
    //   //   this.saveCheck.emit(res);
    //   // }
    // });
  }
}
