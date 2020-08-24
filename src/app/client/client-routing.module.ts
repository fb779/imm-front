import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClientComponent } from "./client.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },

      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
