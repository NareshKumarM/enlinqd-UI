import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsSummaryComponent } from './summary.component';
import { TremendousRoutingModule } from './tremendous-routing.module';
import { AngularMaterialModule } from '../../shared/modules/material.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAllDirective } from '../../shared/directives/select-all.directive';


@NgModule({
    declarations: [
        RewardsSummaryComponent,
        AddOrderComponent
    ],
    imports: [
        CommonModule,
        TremendousRoutingModule,
        AngularMaterialModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatButtonModule,
        ReactiveFormsModule,
        SelectAllDirective
    ]
})
export class TremendousModule { }
