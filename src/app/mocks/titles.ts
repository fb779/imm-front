import { Title } from "../models/Titlel";
import { Country } from '../models/Country';

export const opsTitles: Title[] = [
    { value: 'Mr', name:'Mr'},
    { value: 'Mrs', name:'Mrs'},
    { value: 'Miss', name:'Miss'},
    { value: 'Ms', name:'Ms' },
  ];

export const opsYesNo = [
    {value: '1', name: 'Yes'},
    {value: '2', name: 'No'},
  ];

export const opsSex = [
    { value: '1', name:'Male'},
    { value: '2', name:'Female'},
  ];

export const opsCountries: Country[] = [
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

  export const opsStatus = [
    {value: '1', name: 'Citizen'},
    {value: '2', name: 'Visitor'},
    {value: '3', name: 'Student'},
    {value: '4', name: 'Worker'},
    {value: '5', name: 'Other'},
  ];

export const opsProvinces = [
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

export const opsMaritalStatus = [
    {value: '1', name: 'single'},
    {value: '2', name: 'married' },
    {value: '3', name: 'separated'},
    {value: '4', name: 'divorced' },
    {value: '5', name: 'widowed'},
  ];

export const opsPropousVisit = [
    {value: '1', name: 'business'},
    {value: '2', name: 'tourism'},
    {value: '3', name: 'visiting relatives'},
    {value: '4', name: 'visiting friends'},
    {value: '5', name: 'medical treatment '},
    {value: '6', name: 'other'},
  ];

export const opsStayCanada = [
    {value: '1', name: '0-6 months'},
    {value: '2', name: '6 months or more'},
  ];