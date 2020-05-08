import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { ClientService } from '../../services/services.index';
import { Document } from '../../models/Document';
import { Client } from '../../models/Client';


@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  user: any;
  client: Client
  spinner: Boolean = false;

  document_list: Document[] = [];

  constructor(private _nbAuth: NbAuthService, private _clientServices: ClientService) {
    this._nbAuth.getToken().subscribe((data: any) => {
      this.user = data.payload.user;
    });
  }

  ngOnInit() {
    this._clientServices.getClientById(this.user.client).subscribe((response) => {
      this.client = response;

    });
  }

  seleccionarImagen(archivo) {
    console.log('archivo', archivo);
    console.log(archivo.target.value);
  }


}
