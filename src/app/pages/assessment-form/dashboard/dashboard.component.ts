import { Component, OnInit } from '@angular/core';
import { UserProcessService } from '../../../services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  processes = [];

  constructor( private _router: Router ,private _processServices: UserProcessService) {
    this.getProcesses();
  }

  ngOnInit() {
  }

  getProcesses(){
    this._processServices.getUserProcesses().subscribe((dt: any)=> this.processes = dt);
  }

  goPorcess( process: any ){
    console.log('Proceso seleccionado',process);
    if (process.type_visa === 'VISITOR'){
      this._router.navigate(['/pages/assessment-form/visit', process._id]);
    }
  }
}
