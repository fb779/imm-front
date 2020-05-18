import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { FormsGuidesService } from '../../services/services.index';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  user: any;
  forms: any[] = [];
  guides: any[] = [];

  constructor(private _fgs: FormsGuidesService, private _nbAuth: NbAuthService) {
    this._nbAuth.getToken().subscribe((data: any) => {
      this.user = data.payload.user;
    });
  }

  ngOnInit() {

    this._fgs.getFormsGuidesByClient(this.user.client).subscribe((data: any) => {
      this.forms = data.filter(el => el.type === 'forms');
      this.guides = data.filter(el => el.type === 'guides');
    });

  }

}
