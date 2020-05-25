import { Component, OnInit } from '@angular/core';
import { UserProcessService } from '../../../services/services.index';
import { Router } from '@angular/router';
import { Process } from '../../../models/Process';
import { status, visa_categories } from '../../../config/config';



@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  processes: Process[] = [];
  status:any = status;

  constructor(private _router: Router, private _processServices: UserProcessService) {
    this.getProcesses();
  }

  ngOnInit() {
  }

  getProcesses() {
    this._processServices.getUserProcesses().subscribe((dt: Process[]) => {
      this.processes = dt;
    });
  }

  goProcess(process: Process) {
    let routeForm = null;

    switch (process.visa_category.name) {
      case visa_categories.visitor: {
        routeForm = 'visit';
      } break;

      case visa_categories.turist: {
        routeForm = 'turist';
      } break;

      case visa_categories.study: {
        routeForm = 'study';
      } break;
    }

    if (routeForm) {
      this._router.navigate(['/pages/assessment-form/', routeForm, process._id]);
    }
  }
}
