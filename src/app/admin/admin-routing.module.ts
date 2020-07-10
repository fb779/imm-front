import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module')
        .then(m => m.UsersModule),
      },
      {
        path: 'clients',
        loadChildren: () => import('./admin-client/admin-client.module')
        .then(m => m.AdminClientModule),
      },
      {
        path: 'processes',
        loadChildren: () => import('./processes/processes.module')
        .then(m => m.ProcessesModule),
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
