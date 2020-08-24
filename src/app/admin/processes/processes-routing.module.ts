import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProcessesComponent } from "./processes.component";

const routes: Routes = [
  {
    path: "",
    component: ProcessesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessesRoutingModule {}
