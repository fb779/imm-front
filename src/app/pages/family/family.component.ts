import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { UserProcessService, FamilyService } from '../../services/services.index';
import { Process } from '../../models/Process';
import { NbAuthService } from '@nebular/auth';



@Component({
  selector: 'ngx-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  user;
  familyMembers: Client[] = [];

  constructor(private _nbAuthService: NbAuthService, private _familyService: FamilyService) {
    this._nbAuthService.getToken().subscribe((token) => {
      if (token.isValid()) {
        this.user = token.getPayload()['user'];
      }
    });
  }

  ngOnInit() {
    this._familyService.getFamilyMembersByClient(this.user.client).subscribe((response) => {
      this.familyMembers = response;
    });
  }

}
