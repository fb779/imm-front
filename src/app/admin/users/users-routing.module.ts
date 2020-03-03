import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        // children: [
        //     {
        //         path: 'user/:id',
        //         component: UserComponent
        //     }
        // ]
    },
    {
        path: 'user/:id',
        component: UserComponent
    }

    // { path: '', component: HomeComponent },
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
export class UsersRoutingModule {}
