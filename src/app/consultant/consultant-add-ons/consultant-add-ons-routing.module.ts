import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultantAddOnsComponent } from "./consultant-add-ons.component";
import { ConsultantAddOnsListComponent } from "./consultant-add-ons-list/consultant-add-ons-list.component";
import { ConsultantAddOnsFormComponent } from "./consultant-add-ons-form/consultant-add-ons-form.component";

const routes: Routes = [
  {
    path: "",
    component: ConsultantAddOnsComponent,
    children: [
      {
        path: "",
        component: ConsultantAddOnsListComponent,
      },
      {
        path: ":id",
        component: ConsultantAddOnsFormComponent,
      },
      { path: "**", pathMatch: "full", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantAddOnsRoutingModule {}
