import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AngularMaterialModule } from '../shared/modules/material.module';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { UsersComponent } from './users/users.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { PowerComponent } from './power/power.component';
import { DashboardComponent } from './power/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoaderComponent,
    UsersComponent,
    PowerComponent,
    DashboardComponent
  ],
  imports: [
    AdminRoutingModule,
    AngularMaterialModule,
    CommonModule,
    HighchartsChartModule
  ]
})
export class AdminModule { }
