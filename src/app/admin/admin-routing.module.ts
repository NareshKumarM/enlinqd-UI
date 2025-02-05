import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { PowerComponent } from './power/power.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Admin' },
    component: AdminComponent,
    children: [{
      path: 'users',
      data: { title: 'Users' },
      component: UsersComponent
    },
    { path: 'payouts', loadChildren: () => import('./payouts/payouts.module').then(m => m.PayoutsModule) },
    { path: 'surveys', loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule) },
    { path: 'rewards', loadChildren: () => import('./tremendous/tremendous.module').then(m => m.TremendousModule) },
    {
      path: 'power/dashboard',
      data: { title: 'Power', section: 'dashboard' },
      component: PowerComponent
    },
    {
      path: 'power/dashboard',
      data: { title: 'Power', section: 'dashboard' },
      component: PowerComponent
    },
    {
      path: 'power/sitemap',
      data: { title: 'Power', section: 'sitemap' },
      component: PowerComponent
    },
    {
      path: 'power/smr',
      data: { title: 'Power', section: 'smr' },
      component: PowerComponent
    },
    {
      path: 'power/bmr',
      data: { title: 'Power', section: 'bmr' },
      component: PowerComponent
    },
    {
      path: 'power/reporting',
      data: { title: 'Power', section: 'reporting' },
      component: PowerComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
