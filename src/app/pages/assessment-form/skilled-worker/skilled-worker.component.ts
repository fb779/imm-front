import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-skilled-worker',
  templateUrl: './skilled-worker.component.html',
  styleUrls: ['./skilled-worker.component.scss']
})
export class SkilledWorkerComponent implements OnInit {
  form:any =  {};
  selectDestiny = [];
  opt = [];

  optTitle = [
    { value: 'Mr', name:'Mr'},
    { value: 'Mrs', name:'Mrs'},
    { value: 'Miss', name:'Miss'},
    { value: 'Ms', name:'Ms' },
  ];

  optSex = [
    { value: 1, name: 'Male'},
    { value: 1, name: 'Female'}
  ];

  optChildren = [
    { value: 0, name: '0'},
    { value: 1, name: '1'},
    { value: 2, name: '2'},
    { value: 99, name: 'More'}
  ];

  constructor() { }

  ngOnInit() {
  }

  guardar( f: NgForm ){
    console.log(f);
  }
}
