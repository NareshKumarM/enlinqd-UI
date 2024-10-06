import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AngularMaterialModule } from '../shared/modules/material.module';
import { LoaderComponent } from '../shared/components/loader/loader.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoaderComponent
  ],
  imports: [
    AdminRoutingModule,
    AngularMaterialModule,
    CommonModule
  ]
})
export class AdminModule { }
