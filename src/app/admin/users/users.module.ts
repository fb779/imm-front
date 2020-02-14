import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  exports: [],
  declarations: [
    UserComponent
  ]
})
export class UsersModule { }
