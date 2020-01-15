import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { Title } from '../../../models/Titlel';
import { Country } from '../../../models/Country';

import { AssessmentFormService } from '../../../services/services.index';

@Component({
  selector: 'ngx-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  optTitles: Title[] = [];
  optYesNo = [
    {value: '', name: 'Yes'},
    {value: '', name: 'No'},
  ];

  optSex = [
    { value: '1', name:'Male'},
    { value: '2', name:'Female'},
  ];

  optCountries: Country[] = [
    { value: '1', name: 'Pais 1' },
    { value: '2', name: 'Pais 2' },
    { value: '3', name: 'Pais 3' },
    { value: '4', name: 'Pais 4' },
    { value: '5', name: 'Pais 5' },
    { value: '6', name: 'Pais 6' },
    { value: '7', name: 'Pais 7' },
    { value: '8', name: 'Pais 8' },
    { value: '9', name: 'Pais 9' },
    { value: '10', name: 'Pais 10' },
  ];
  optStatus = [
    {name: 'Citizen', value: '1'},
    {name: 'Visitor', value: '2'},
    {name: 'Student', value: '3'},
    {name: 'Worker', value: '4'},
    {name: 'Other', value: '5'},
  ]
  optProvinces = [
    {value: '1', name: 'Ontario'},
    {value: '2', name: 'Quebec'},
    {value: '3', name: 'British Columbia'},
    {value: '4', name: 'Alberta'},
    {value: '5', name: 'Manitoba'},
    {value: '6', name: 'Saskatchewan'},
    {value: '7', name: 'Nova Scotia'},
    {value: '8', name: 'New Brunswick'},
    {value: '9', name: 'Newfoundland and Labrador'},
    {value: '10', name: 'Prince Edward Island'},
    {value: '11', name: 'Northwest Territories'},
    {value: '12', name: 'Nunavut'},
    {value: '13', name: 'Yukon'},
  ];

  optMaritalStatus = [
    {value: '', name: 'single'},
    {value: '', name: 'married' },
    {value: '', name: 'separated'},
    {value: '', name: 'divorced' },
    {value: '', name: 'widowed'},
  ];

  optPropousVisit = [
    {value: '', name: 'business'},
    {value: '', name: 'tourism'},
    {value: '', name: 'visiting relatives'},
    {value: '', name: 'visiting friends'},
    {value: '', name: 'medical treatment '},
    {value: '', name: 'other'},
  ];

  optStayCanada = [
    {value: '', name: '0-6 months'},
    {value: '', name: '6 months or more'},
  ];

  constructor(
    private _asf: AssessmentFormService
  ) {
    this._asf.getTitles().subscribe( (data)=>{
      this.optTitles = data;
    } );
  }

  ngOnInit() {


  }

}
