import { Component, OnInit } from '@angular/core';
import { AdminProcessService } from '../../services/process/admin-process.service';

@Component({
  selector: 'ngx-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  processes = [];
  consultans = [
    {
      _id: "sd8778dsy87dsy78ds78yds",
      name: 'perpito cosito'
    },
    {
      _id: "67sd67ds67sd6778ds78yds",
      name: 'juanito perenzejo'
    }
  ];
  selectedConsultor = '';

  constructor( private _process: AdminProcessService ) {
    this._process.getProcessToAsigned().subscribe((data: any)=>{
      // console.log('Procesos pendientes de asignacion', data);
      this.processes = data;
    });

    this._process.getConsultans().subscribe((data: any)=>{
      // console.log('Consultores encontrados', data);
      this.consultans = data;
    });
  }

  ngOnInit() {
  }

  save(process: any){
    console.log('proceso seleccionado', process);
  }
}
