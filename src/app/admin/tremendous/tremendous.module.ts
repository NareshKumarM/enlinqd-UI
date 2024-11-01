import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsSummaryComponent } from './summary.component';
import { TremendousRoutingModule } from './tremendous-routing.module';
import { AngularMaterialModule } from '../../shared/modules/material.module';


@NgModule({
    declarations: [
        RewardsSummaryComponent
    ],
    imports: [
        CommonModule,
        TremendousRoutingModule,
        AngularMaterialModule
    ]
})
export class TremendousModule { }
