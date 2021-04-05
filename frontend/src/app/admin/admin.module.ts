import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    EditUserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
