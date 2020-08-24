import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { UsersComponent } from "./users.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UsersComponent,
      },
      {
        path: ":id",
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
