import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminStepsComponent } from "./admin-steps.component";

const routes: Routes = [
  {
    path: "",
    component: AdminStepsComponent,
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
export class AdminStepsRoutingModule {}
