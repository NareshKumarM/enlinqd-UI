import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveySummaryComponent } from './summary/summary.component';
import { ListComponent } from './summary/list/list.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Surveys' },
    component: SurveySummaryComponent,
  },
  {
    path: 'summary',
    data: { title: 'Surveys' },
    component: SurveySummaryComponent,
  },
  {
    path: 'list',
    data: { title: 'List' },
    component: ListComponent,
  },
  {
    path: 'designer',
    data: { title: 'Add Survey' },
    component: SurveyCreatorComponent,
  },
  {
    path: 'designer/:id',
    data: { title: 'Edit Survey' },
    // data: { title: "Event Details", action: "update" },
    component: SurveyCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysRoutingModule { }
