import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Client } from '../../../models/Client';

@Component({
  selector: 'ngx-delete-family-member',
  templateUrl: './delete-family-member.component.html',
  styleUrls: ['./delete-family-member.component.scss']
})
export class DeleteFamilyMemberComponent implements OnInit {

  @Input() client: Client

  constructor(protected ref: NbDialogRef<DeleteFamilyMemberComponent>,) { }

  ngOnInit() {
  }

  cancel(){
    this.ref.close();
  }

  delete(){
    this.ref.close(true);
  }
}
