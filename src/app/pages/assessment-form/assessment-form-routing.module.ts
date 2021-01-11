import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AssessmentFormComponent } from "./assessment-form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  {
    path: "",
    component: AssessmentFormComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: ":id",
        component: FormsComponent,
      },
    ],
  },
  { path: "", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentFormRoutingModule {}
