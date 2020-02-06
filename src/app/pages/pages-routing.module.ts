import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { FormsGuidesComponent } from './forms-guides/forms-guides.component';
import { DocumentsComponent } from './documents/documents.component';
import { VisaComponent } from './visa/visa.component';
import { FamilyComponent } from './family/family.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { CouponsComponent } from './coupons/coupons.component';
import { FreeResourcesComponent } from './free-resources/free-resources.component';
import { AdmissionComponent } from './admission/admission.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { BillingInvoiceComponent } from './billing-invoice/billing-invoice.component';
import { FormsGuidesModule } from './forms-guides/forms-guides.module';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    {
      path: 'iot-dashboard',
      // component: DashboardComponent,
      component: ECommerceComponent,
    },
    // {
    //   path: 'user/dashboard',
    //   // component: ECommerceComponent,
    //   component: DashboardComponent,
    // },
    {
      path: 'user/assessment-form',
      component: AssessmentFormComponent,
      // loadChildren: () => import('./assessment-form/assessment-form.module')
      //   .then(m => m.AssessmentFormModule),
    },
    {
      path: 'forms-guides',
      // component: FormsGuidesComponent,
      loadChildren: () => import('./forms-guides/forms-guides.module')
        .then(m => m.FormsGuidesModule),
    },
    {
      path: 'documents',
      component: DocumentsComponent,
    },
    {
      path: 'visa',
      component: VisaComponent,
    },
    {
      path: 'family',
      component: FamilyComponent,
    },
    {
      path: 'consultant',
      component: ConsultantComponent,
    },
    {
      path: 'add-ons',
      component: AddOnsComponent,
    },
    {
      path: 'coupons',
      component: CouponsComponent,
    },
    {
      path: 'free-resources',
      component: FreeResourcesComponent,
    },
    {
      path: 'admission',
      component: AdmissionComponent,
    },
    {
      path: 'appoinment',
      component: AppoinmentComponent,
    },
    {
      path: 'billin-invoice',
      component: BillingInvoiceComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'user/dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
