import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AdminClientComponent } from "./admin-client.component";
import { FormClientComponent } from "./form-client/form-client.component";

const routes: Routes = [
  {
    path: "",
    // component: HomeComponent,
    children: [
      {
        path: "",
        component: AdminClientComponent,
      },
      {
        path: ":id",
        component: FormClientComponent,
      },
    ],
  },

  // { path: '**', component: PageNotFoundComponent },
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
export class AdminClientsRoutingModule {}
