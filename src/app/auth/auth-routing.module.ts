import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRegisterComponent,
    // NbRequestPasswordComponent,
    // NbResetPasswordComponent,
} from '@nebular/auth';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// import { PageNotFoundComponent } from './';

const routes: Routes = [
    {
        path: '',
        // component: NbAuthComponent,
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            // {
            //     path: 'login',
            //     component: NbLoginComponent,
            // },
            {
                path: 'register',
                // component: NbRegisterComponent,
                component: RegisterComponent,
            },
            {
                path: 'logout',
                component: NbLogoutComponent,
            },
            // {
            //     path: 'request-password',
            //     component: NbRequestPasswordComponent,
            // },
            // {
            //     path: 'reset-password',
            //     component: NbResetPasswordComponent,
            // },
        ],
    },

    // { path: 'oldPath', redirectTo: '/login' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
    // {
    //     path: 'auth',
    //     loadChildren: './auth/auth.module#NgxAuthModule',
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
