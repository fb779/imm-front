import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { DocumentsComponent } from "./documents/documents.component";
import { VisaComponent } from "./visa/visa.component";
import { FamilyComponent } from "./family/family.component";
import { AddOnsComponent } from "./add-ons/add-ons.component";
import { CouponsComponent } from "./coupons/coupons.component";
import { FreeResourcesComponent } from "./free-resources/free-resources.component";
import { AdmissionComponent } from "./admission/admission.component";
import { AppoinmentComponent } from "./appoinment/appoinment.component";
import { BillingInvoiceComponent } from "./billing-invoice/billing-invoice.component";
import { MyConsultantComponent } from "./my-consultant/my-consultant.component";
import { ClientProfileComponent } from "./client-profile/client-profile.component";
import { FaqComponent } from "../components/faq/faq.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "settings",
        component: ClientProfileComponent,
      },
      {
        path: "assessment-form",
        loadChildren: () =>
          import("./assessment-form/assessment-form.module").then(
            (m) => m.AssessmentFormModule
          ),
      },
      {
        path: "forms-guides",
        loadChildren: () =>
          import("./forms-guides/forms-guides.module").then(
            (m) => m.FormsGuidesModule
          ),
      },
      {
        path: "documents",
        component: DocumentsComponent,
      },
      {
        path: "visa",
        component: VisaComponent,
      },
      {
        path: "family",
        component: FamilyComponent,
      },
      {
        path: "my-consultant",
        component: MyConsultantComponent,
      },
      {
        path: "messages",
        loadChildren: () =>
          import("./client-messages/client-message.module").then(
            (m) => m.ClientMessageModule
          ),
      },
      {
        path: "add-ons",
        component: AddOnsComponent,
      },
      {
        path: "faq",
        component: FaqComponent,
      },
      {
        path: "coupons",
        component: CouponsComponent,
      },
      {
        path: "free-resources",
        component: FreeResourcesComponent,
      },
      {
        path: "admission",
        component: AdmissionComponent,
      },
      {
        path: "appoinment",
        component: AppoinmentComponent,
      },
      {
        path: "billin-invoice",
        component: BillingInvoiceComponent,
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
