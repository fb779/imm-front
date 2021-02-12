import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ThemeModule } from "../@theme/theme.module";
import { NbMenuModule, NbCardModule, NbIconModule } from "@nebular/theme";

const nebular = [ThemeModule, NbMenuModule, NbCardModule, NbIconModule];

import { PagesRoutingModule } from "./pages-routing.module";
// importaciones del proyecto base de nebular
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";

// componentes visa services
// import { DocumentsComponent } from './documents/documents.component';
import { VisaComponent } from "./visa/visa.component";
import { AddOnsComponent } from "./add-ons/add-ons.component";
import { FreeResourcesComponent } from "./free-resources/free-resources.component";
import { AdmissionComponent } from "./admission/admission.component";
import { AppoinmentComponent } from "./appoinment/appoinment.component";
import { BillingInvoiceComponent } from "./billing-invoice/billing-invoice.component";
import { AssessmentFormModule } from "./assessment-form/assessment-form.module";
import { FormsGuidesModule } from "./forms-guides/forms-guides.module";
import { DocumentsModule } from "./documents/documents.module";
import { FamilyModule } from "./family/family.module";
import { ClientMessageModule } from "./client-messages/client-message.module";
import { MyConsultantModule } from "./my-consultant/my-consultant.module";
import { ClientProfileComponent } from "./client-profile/client-profile.component";
import { ProfileModule } from "../shared/profile/profile.module";
import { FaqModule } from "../components/faq/faq.module";
import { CouponsModule } from "../components/coupons/coupons.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    // imports form nebular
    ...nebular,
    // modules to application
    ClientMessageModule,
    AssessmentFormModule,
    DocumentsModule,
    FormsGuidesModule,
    FamilyModule,
    // others modules
    DashboardModule,
    ProfileModule,
    MyConsultantModule,
    MiscellaneousModule,
    FaqModule,
    CouponsModule,
  ],
  declarations: [
    PagesComponent,
    VisaComponent,
    AddOnsComponent,
    FreeResourcesComponent,
    AdmissionComponent,
    AppoinmentComponent,
    BillingInvoiceComponent,
    ClientProfileComponent,
  ],
})
export class PagesModule {}
