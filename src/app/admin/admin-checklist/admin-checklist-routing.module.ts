import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminChecklistComponent } from "./admin-checklist.component";
import { AdminChecklistFormComponent } from "./admin-checklist-form/admin-checklist-form.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AdminChecklistComponent,
      },
      {
        path: ":id",
        component: AdminChecklistFormComponent,
      },
    ],
  },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminChecklistRoutingModule {}
