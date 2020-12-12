/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "../environments/environment";

import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
} from "@nebular/auth";

import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from "@nebular/theme";

import { ServiceModule } from "./services/service.module";
import { AuthGuardGuard } from "./services/services.index";
import { AuthInterceptorService } from "./services/interceptor/auth-interceptor.service";
import { passwordRegex } from "./config/config";
// import { passwordRegex } from "./config/config";

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
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: `${environment.api_url}${environment.api_version}`,
          token: {
            class: NbAuthJWTToken,
          },
          login: {
            endpoint: "/auth/signin",
            method: "post",
            redirect: {
              success: "/pages",
              failure: null,
            },
            // defaultErrors: ["Login/Email combination is not correct."],
            // defaultMessages: ["You have been successfully logged in."],
          },
          // register: {
          //   endpoint: "/login/signup",
          //   method: "post",
          //   redirect: {
          //     success: "/auth/login",
          //     failure: null,
          //   },
          //   // defaultErrors: ["Something went wrong, please try again."],
          //   // defaultMessages: ["You have been successfully registered."],
          // },
          logout: {
            endpoint: "/auth/signout",
            method: "get",
            redirect: {
              success: "/auth/login",
              failure: null,
            },
          },
          requestPass: {
            endpoint: "/auth/request-pass",
            method: "post",
            redirect: {
              success: "/auth/login",
              failure: null,
            },
            // defaultErrors: ["Something went wrong, please try again."],
            // defaultMessages: [
            //   "Reset password instructions have been sent to your email.",
            // ],
          },
          resetPass: {
            endpoint: "/auth/reset-pass",
            method: "put",
            resetPasswordTokenKey: "token",
            requireValidToken: false,
            redirect: {
              success: "/auth/login",
              failure: null,
            },
            // defaultErrors: ['Login/Email combination is not correct, please try again.'],
            // defaultMessages: ['You have been successfully logged in.'],
          },
          // errors: {
          //   getter: (module, res, options) => {
          //     return res ? res.errors : options[module].defaultErrors;
          //   },
          // },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
          strategy: "email", // strategy id key.
          // rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {
            // show/not show success/error messages
            success: true,
            error: true,
          },
          // socialLinks: socialLinks, // social links at the bottom of a page
        },
        // register: {
        //   redirectDelay: 100, // delay before redirect after a successful login, while success message is shown to the user
        //   strategy: 'email',  // strategy id key.
        //   // rememberMe: false,   // whether to show or not the `rememberMe` checkbox
        //   showMessages: {     // show/not show success/error messages
        //     success: true,
        //     error: true,
        //   },
        //   // socialLinks: socialLinks, // social links at the bottom of a page
        // },
        requestPassword: {
          redirectDelay: 5000,
          strategy: "email",
          showMessages: {
            success: true,
            error: true,
          },
          // socialLinks: socialLinks,
        },
        resetPassword: {
          redirectDelay: 1000,
          strategy: "email",
          showMessages: {
            success: true,
            error: true,
          },
          // socialLinks: socialLinks,
        },
        // logout: {
        //   redirectDelay: 500,
        //   strategy: 'email',
        // },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
            pattern: passwordRegex,
            regexp:
              "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/",
          },
          email: {
            required: true,
            email: true,
            pattern: "",
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
