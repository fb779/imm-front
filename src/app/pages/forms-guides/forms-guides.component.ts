import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { FormsGuidesService } from '../../services/services.index';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  user: any;
  guides: any[] = [];

  constructor(private _fgs: FormsGuidesService, private _nbAuth: NbAuthService) {
    this._nbAuth.getToken().subscribe((data: any) => {
      this.user = data.payload.user;
    });
  }

  ngOnInit() {

    this._fgs.getDocuments(this.user._id).subscribe((data: any) => {
      this.guides = data;
    });

  }

}
