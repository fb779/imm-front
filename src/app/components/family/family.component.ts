import { Component, OnInit, Input  } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Process } from '../../models/Process';
import { FormFamilyMembersComponent } from './form-family-members/form-family-members.component';
import { DeleteFamilyMemberComponent } from './delete-family-member/delete-family-member.component';
import { FamilyService, ToastrService } from '../../services/services.index';
import { status } from '../../config/config';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  @Input() process: Process;
  @Input() url:string[];

  visible: boolean = true; // define la visibilidad de los botones de editar y eliminar

  listFamilyMembers$ = this._familyServices.listFamilyMembers$;
  // numberFamilyMembers$ = this._familyServices.numberFamilyMembers$;
  numberFamilyMembers = this._familyServices.numberFamilyMembers;

  constructor(private _toastr: ToastrService, private dialogService: NbDialogService, private _familyServices: FamilyService) { }

  ngOnInit() {
    // console.log('Proceso cargado en componente de miembros de familia',this.process);
    this._familyServices.chageProcess(this.process._id);
  }

  // isVisible( url: string[], process: Process, NumberFamily: number  ){
  isVisible(){
    let visible = false;

    if ( this.url[0] === 'pages'){
      if ( this.process.status === status.form && this.numberFamilyMembers < (this.process.companion+1) ){
        visible = true;
      }
    } else {
      if ( this.process.status !== status.form){
        visible = true;
      }
    }
    return of(visible);
  }

  openDialog(){
    if ( this.process.companion + 1 <= this._familyServices.numberFamilyMembers ){
        this._toastr.toastrGenericMessage('Limit of family members', 'Family Members', 'warning');
        return;
    }

    this.dialogService.open(FormFamilyMembersComponent, {
      context:{
        process: this.process,
        url: this.url
      },
    });
  }

  updateClient(ev){
    // console.log('actualizar cliente',ev);
    this.dialogService.open(FormFamilyMembersComponent, {
      context:{
        process: this.process,
        url: this.url,
        client: ev,
      },
    });
  }

  deleteClient(ev){
    // console.log('eliminar cliente',ev);
    this.dialogService.open( DeleteFamilyMemberComponent, {
      context: { client: ev }
    }).onClose.subscribe( res =>{
        if (res){
          this._familyServices.removeFamiliMember(this.process, ev ).subscribe(() => {
            this._toastr.toastrGenericMessage('Remove family member', 'Family members', 'success');
          });
        }
      });
  }

}
