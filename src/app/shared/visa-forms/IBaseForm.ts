import { FormGroup } from "@angular/forms";

export interface IBaseForm {
  parentForm: FormGroup;
  childForm: FormGroup;

  nameSection: string;
  submitted: boolean;
  data: any;

  build(): void;
  loadInformation(): void;
  loadOptions(): void;
}
