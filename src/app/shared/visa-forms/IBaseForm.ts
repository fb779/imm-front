import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";

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
