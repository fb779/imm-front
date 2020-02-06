import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormsGuidesComponent } from './forms-guides.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
    {
        path: '',
        component: FormsGuidesComponent ,
        // children: [
        //     {
        //         path: '',
        //         component: FormsComponent
        //     }
        //     {
        //         path: ':form',
        //         component: FormsComponent
        //     }
        // ]
    },
    {
        path: ':document',
        component: FormsComponent
    }

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
export class FormsGuidesRoutingModule {}
