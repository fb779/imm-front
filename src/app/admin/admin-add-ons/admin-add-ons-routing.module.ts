import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AdminAddOnsComponent } from "./admin-add-ons.component";
import { AdminAddOnsListComponent } from "./admin-add-ons-list/admin-add-ons-list.component";
import { AdminAddOnsFormComponent } from "./admin-add-ons-form/admin-add-ons-form.component";

const routes: Routes = [
  {
    path: "",
    component: AdminAddOnsComponent,
    children: [
      { path: "", component: AdminAddOnsListComponent },
      { path: ":id", component: AdminAddOnsFormComponent },
      { path: "**", pathMatch: "full", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddOnsRoutingModule {}
