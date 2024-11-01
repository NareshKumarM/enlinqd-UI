import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardsSummaryComponent } from './summary.component';

const routes: Routes = [{ path: '', component: RewardsSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TremendousRoutingModule { }
