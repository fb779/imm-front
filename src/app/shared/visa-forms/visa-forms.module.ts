import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbListModule,
  NbAlertModule,
  NbSpinnerModule,
} from "@nebular/theme";

const nebular = [
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  NbListModule,
  NbAlertModule,
  NbSpinnerModule,
];

import { FamilyModule } from "../../components/family/family.module";

import { VisaFormsComponent } from "./visa-forms.component";
import { VisitorComponent } from "./visitor/visitor.component";
import { SecMaritalStatusComponent } from "./sec-marital-status/sec-marital-status.component";
import { FormExpressEntryComponent } from "./form-express-entry/form-express-entry.component";
import { FormWorkPermitComponent } from "./form-work-permit/form-work-permit.component";
import { FormVisitorComponent } from "./form-visitor/form-visitor.component";
import { SecPersonalInformationComponent } from "./sec-personal-information/sec-personal-information.component";
import { SecEducationComponent } from "./sec-education/sec-education.component";
import { SecInformationComponent } from "./sec-information/sec-information.component";
import { SecVisitComponent } from "./sec-visit/sec-visit.component";
import { SecLanguageTestComponent } from "./sec-language-test/sec-language-test.component";
import { SecWorkDetailsComponent } from "./sec-work-details/sec-work-details.component";
import { SecFamilyComponent } from "./sec-family/sec-family.component";
import { SecFinancialComponent } from "./sec-financial/sec-financial.component";
import { SecWpInformationComponent } from "./sec-wp-information/sec-wp-information.component";
import { SecWorkPermitComponent } from "./sec-work-permit/sec-work-permit.component";
import { SecFamilyInfoComponent } from './sec-family-info/sec-family-info.component';

@NgModule({
  declarations: [
    VisaFormsComponent,
    SecMaritalStatusComponent,
    FormExpressEntryComponent,
    FormWorkPermitComponent,
    VisitorComponent,
    FormVisitorComponent,
    SecPersonalInformationComponent,
    SecEducationComponent,
    SecInformationComponent,
    SecVisitComponent,
    SecLanguageTestComponent,
    SecWorkDetailsComponent,
    SecFamilyComponent,
    SecFinancialComponent,
    SecWpInformationComponent,
    SecWorkPermitComponent,
    SecFamilyInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...nebular,
    FamilyModule,
  ],
  exports: [VisaFormsComponent],
})
export class VisaFormsModule {}
