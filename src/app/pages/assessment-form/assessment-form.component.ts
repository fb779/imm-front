import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-assessment-form',
  // template: `<router-outlet></router-outlet>`,
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {
  form: number = null;
  opts = [
    {
      value: 1,
      name: 'Visitor',
    },
    {
      value: 2,
      name: 'Student',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
