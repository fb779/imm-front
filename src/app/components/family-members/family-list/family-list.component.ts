import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../../models/Client';

@Component({
  selector: 'ngx-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

  @Input('list') listFamilyMembers;
  @Input('visible') visible: boolean;
  @Output() update_client: EventEmitter<any> = new EventEmitter();
  @Output() delete_client: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
