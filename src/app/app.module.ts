/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, NbAuthSimpleToken } from '@nebular/auth';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { ServiceModule } from './services/service.module';
import { AuthGuardGuard } from './services/services.index';
import { URL_SERVICIOS } from './config/config';

// const formSetting: any = {
//   redirectDelay: 100, // delay before redirect after a successful login, while success message is shown to the user
//   strategy: 'email',  // strategy id key.
//   rememberMe: true,   // whether to show or not the `rememberMe` checkbox
//   showMessages: {     // show/not show success/error messages
//     success: true,
//     error: true,
//   },
//   // socialLinks: socialLinks, // social links at the bottom of a page
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: URL_SERVICIOS,
          token: {
            // class: NbAuthSimpleToken,
            class: NbAuthJWTToken,
            // key: 'token', // this parameter tells where to look for the token
          },
          login: {
            endpoint: '/login/signin',
            method: 'post',
            redirect: {
              success : '/pages',
              failure: null,
            },
            // defaultErrors: ['Login/Email combination is not correct, please try again.'],
            // defaultMessages: ['You have been successfully logged in.'],
          },
          register: {
            endpoint: '/login/signup',
            method: 'post',
            redirect: {
              success : '/auth/login',
              failure: null,
            },
            // defaultErrors: ['Login/Email combination is not correct, please try again.'],
            // defaultMessages: ['You have been successfully logged in.'],
          },
          logout: {
            endpoint: '/login/signout',
            method: 'get',
            redirect: {
              success : '/auth/login',
              failure: null,
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          // rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          // socialLinks: socialLinks, // social links at the bottom of a page
        },
        register: {
          redirectDelay: 100, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          // rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          // socialLinks: socialLinks, // social links at the bottom of a page
        },

        // requestPassword: {
        //   redirectDelay: 500,
        //   strategy: 'email',
        //   showMessages: {
        //     success: true,
        //     error: true,
        //   },
        //   // socialLinks: socialLinks,
        // },
        // resetPassword: {
        //   redirectDelay: 500,
        //   strategy: 'email',
        //   showMessages: {
        //     success: true,
        //     error: true,
        //   },
        //   // socialLinks: socialLinks,
        // },
        // logout: {
        //   redirectDelay: 500,
        //   strategy: 'email',
        // },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
            email: true,
            pattern: ''
          },
          firstName: {
            required: true,
            minLength: 2,
            maxLength: 20,
          },
          lastName: {
            required: true,
            minLength: 2,
            maxLength: 25,
          },
        },
      },
    }),

  ],
  providers: [
    AuthGuardGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
