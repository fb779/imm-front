import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  document = 'sin carga';

  documentUrl: string = './assets/documents/';

  constructor(
    private _router: Router,
    private _activateRoute: ActivatedRoute
  ) {
    this._activateRoute.params.subscribe( (params) => {
      // console.log(params);
      this.document = params['document'];
      // this.id = params['id'];

      // if ( this.id !== 'nuevo' ){
      //   this.cargarMedico( this.id );
      // }
    });
  }

  ngOnInit() {
  }

  download(){
    console.log(this.document);
    window.open( this.documentUrl + this.document , '_blank', '', true);
  }

  goback(){
    this._router.navigate(['/pages/forms-guides']);
  }
}
