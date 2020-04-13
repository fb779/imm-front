import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {

  @Input('process') form:{};

  constructor() {
  }

  ngOnInit() {
    console.log('study', this.form);
  }

}
