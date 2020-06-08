import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClientMessageComponent } from './client-message.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: ClientMessageComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      { path: ':process', component: ChatComponent },
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full', },

  // { path: '**', component: PageNotFoundComponent },
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientMessagesRoutingModule {}
