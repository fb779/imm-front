import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminVisaCategoriesComponent } from "./admin-visa-categories.component";
import { AdminVisaCategoriesFormComponent } from "./admin-visa-categories-form/admin-visa-categories-form.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: AdminVisaCategoriesComponent },
      { path: ":id", component: AdminVisaCategoriesFormComponent },
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
export class AdminVisaCategoriesRoutingModule {}
