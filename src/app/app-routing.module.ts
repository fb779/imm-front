import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import {
  AuthGuardGuard,
  AdminProfileGuard,
  UserTypeGuard,
} from "./services/services.index";

const routes: Routes = [
  {
    path: "auth",
    // canActivate: [AuthGuardGuard],
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "pages",
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "admin",
    canActivate: [AuthGuardGuard, UserTypeGuard],
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
    data: {
      role: "ADMIN_ROLE",
    },
  },
  {
    path: "client",
    canActivate: [AuthGuardGuard, UserTypeGuard],
    loadChildren: () =>
      import("./client/client.module").then((m) => m.ClientModule),
    data: {
      role: "CLIENT_ROLE",
    },
  },
  {
    path: "consultant",
    canActivate: [AuthGuardGuard, UserTypeGuard],
    loadChildren: () =>
      import("./consultant/consultant.module").then((m) => m.ConsultantModule),
    data: {
      role: "USER_ROLE",
    },
  },
  { path: "", redirectTo: "pages", pathMatch: "full" },
  { path: "**", redirectTo: "pages" },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
