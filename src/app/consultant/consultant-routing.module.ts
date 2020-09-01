import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ConsultantComponent } from "./consultant.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProcessesComponent } from "./processes/processes.component";
import { ProcessComponent } from "./processes/process.component";
import { AppointmentComponent } from "./appointment/appointment.component";
// import { MakeAppointmentComponent } from "../shared/appointment/make-appointment/make-appointment.component";
import { ConsultantProfileComponent } from "./consultant-profile/consultant-profile.component";

const routes: Routes = [
  {
    path: "",
    component: ConsultantComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "profile",
        component: ConsultantProfileComponent,
      },
      {
        path: "processes",
        component: ProcessesComponent,
      },
      {
        path: "processes/:id",
        component: ProcessComponent,
      },
      {
        path: "appointment",
        component: AppointmentComponent,
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
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
export class ConsultantRoutingModule {}
