import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CheckListFormComponent } from './check-list-form/check-list-form.component';
import { Process } from '../../models/Process';
import { ChecklistService } from '../../services/services.index';

@Component({
  selector: 'ngx-dialog-checklist',
  template: `
    <button nbButton size="small" fullWidth (click)="openDialog()" *ngIf="itemNames.length > 0">
        <nb-icon icon="plus-circle-outline"></nb-icon>
    </button>
    <!-- <button nbButton size="small">

        <nb-icon pack="fas" icon="plus-circle"></nb-icon>
    </button> -->
  `,
  styleUrls: ['./dialog-checklist.component.scss']
})
export class DialogChecklistComponent implements OnInit {

  @Input('process') process: Process;
  @Output() saveCheck: EventEmitter<Boolean> = new EventEmitter();
  itemNames = [];
  constructor(private dialogService: NbDialogService, private _checklistService: ChecklistService) { }

  ngOnInit() {
    this._checklistService.getChecklistByType(this.process.visa_category.name).pipe( ).subscribe(
      (list:any)=> this.itemNames = list.map(({name})=>(name))
    );
  }

  openDialog(){
    this.dialogService.open(CheckListFormComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
        process: this.process,
        items: this.itemNames
      },
    }).onClose.subscribe( (res)=>{
      if (res ){
        this.saveCheck.emit(res);
      }
    });
  }

}
