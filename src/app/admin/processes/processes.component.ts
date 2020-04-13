import { Component, OnInit } from '@angular/core';
import { AdminProcessService } from '../../services/process/admin-process.service';

@Component({
  selector: 'ngx-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  processes = [];
  consultants = [];
  selectedConsultor = '';

  constructor( private _process: AdminProcessService ) {
    this._process.getConsultans().subscribe((data: any)=>{
      // console.log('Consultores encontrados', data);
      this.consultants = data;
    });

    this.loadProcess();
  }

  ngOnInit() {
  }

  loadProcess(){
    this._process.getProcessToAsigned().subscribe((data: any)=>{
      this.processes = data;
    });
  }

  save(process: any){
    console.log('proceso seleccionado', process);
    this._process.setAsignConsultan(process).subscribe(( data: any )=>{
      console.log(data);
      if (data.ok){
        this.loadProcess();
      }
    })
  }
}
