import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "settings",
        component: AdminProfileComponent,
      },
      {
        path: "users",
        loadChildren: () =>
          import("./users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "clients",
        loadChildren: () =>
          import("./admin-client/admin-client.module").then(
            (m) => m.AdminClientModule
          ),
      },
      {
        path: "checklist",
        loadChildren: () =>
          import("./admin-checklist/admin-checklist.module").then(
            (m) => m.AdminChecklistModule
          ),
      },
      {
        path: "visa-category",
        loadChildren: () =>
          import("./admin-visa-categories/admin-visa-categories.module").then(
            (m) => m.AdminVisaCategoriesModule
          ),
      },
      {
        path: "steps",
        loadChildren: () =>
          import("./admin-steps/admin-steps.module").then(
            (m) => m.AdminStepsModule
          ),
      },
      {
        path: "processes",
        loadChildren: () =>
          import("./processes/processes.module").then((m) => m.ProcessesModule),
      },
      {
        path: "add-ons",
        // component: AdminAddOnsComponent,
        loadChildren: () =>
          import("./admin-add-ons/admin-add-ons.module").then(
            (m) => m.AdminAddOnsModule
          ),
      },

      { path: "**", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
