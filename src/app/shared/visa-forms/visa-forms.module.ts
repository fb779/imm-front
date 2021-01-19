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
  NbStepperModule,
  NbListModule,
  NbAccordionModule,
  NbSpinnerModule,
  NbAlertModule,
} from "@nebular/theme";

const nebular = [
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbButtonModule,
  // NbStepperModule,
  // NbListModule,
  // NbAccordionModule,
  // NbSpinnerModule,
  // NbAlertModule,
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
import { SecFinatialComponent } from "./sec-finatial/sec-finatial.component";

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
    SecFinatialComponent,
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
