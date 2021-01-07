import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AssessmentFormComponent } from "./assessment-form.component";
import { VisitComponent } from "./visit/visit.component";
import { StudyComponent } from "./study/study.component";
import { WorkPermitComponent } from "./work-permit/work-permit.component";
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
        path: ":form/:id",
        component: FormsComponent,
      },
      // {
      //   path: "visit/:id",
      //   component: VisitComponent,
      // },
    ],
  },
  { path: "", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentFormRoutingModule {}
