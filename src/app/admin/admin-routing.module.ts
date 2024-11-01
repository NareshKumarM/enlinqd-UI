import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

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
    { path: 'rewards', loadChildren: () => import('./tremendous/tremendous.module').then(m => m.TremendousModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
