import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-forms-guides',
  templateUrl: './forms-guides.component.html',
  styleUrls: ['./forms-guides.component.scss']
})
export class FormsGuidesComponent implements OnInit {

  guides: any[] = [
    {
      title: 'Pasos para la visa',
      type: 'pdf',
      description: 'Description steps to process to visar',
    },
    {
      title: 'Documents upload',
      type: 'doc',
      description: 'UPLOAD DOCUMENTS TO PLATFORM',
    },
    {
      title: 'Billing and invoces',
      type: 'ppt',
      description: 'The billing and invoices to process',
    },
    {
      title: 'More info for you',
      type: 'zip',
      description: 'Join the interesting information',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
