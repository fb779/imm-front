import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ThemeModule } from '../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbRadioModule,
  NbUserModule
} from '@nebular/theme';

const nebular = [
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  // NbInputModule,
  // NbSelectModule,
  // NbActionsModule,
  // NbButtonModule,
  // NbCheckboxModule,
  // NbDatepickerModule,
  // NbIconModule,
  // NbRadioModule,
  // NbUserModule
];

// importaciones del proyecto base de nebular
import { PagesComponent } from './pages.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

// componentes visa services
// import { DocumentsComponent } from './documents/documents.component';
import { VisaComponent } from './visa/visa.component';
import { FamilyComponent } from './family/family.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { CouponsComponent } from './coupons/coupons.component';
import { FreeResourcesComponent } from './free-resources/free-resources.component';
import { AdmissionComponent } from './admission/admission.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { BillingInvoiceComponent } from './billing-invoice/billing-invoice.component';
import { AssessmentFormModule } from './assessment-form/assessment-form.module';
import { FormsGuidesModule } from './forms-guides/forms-guides.module';
import { DocumentsModule } from './documents/documents.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    // imports form nebular
    ...nebular,
    // modules to application
    AssessmentFormModule,
    DocumentsModule,
    FormsGuidesModule,
    // others modules
    // DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    // AssessmentFormComponent,
    // FormsGuidesComponent,
    // DocumentsComponent,
    VisaComponent,
    FamilyComponent,
    ConsultantComponent,
    AddOnsComponent,
    CouponsComponent,
    FreeResourcesComponent,
    AdmissionComponent,
    AppoinmentComponent,
    BillingInvoiceComponent,
  ],
})
export class PagesModule {
}
