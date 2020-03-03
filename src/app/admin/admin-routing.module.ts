import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module')
                    .then(m => m.UsersModule),
            },
            {
                path: 'processes',
                loadChildren: () => import('./processes/processes.module')
                    .then(m => m.ProcessesModule),
            },

        ],
    },

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    // { path: 'path2', component: Name2Component },
    // { path: 'path3', component: Name3Component },
    // { path: 'path4', component: Name4Component },
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
