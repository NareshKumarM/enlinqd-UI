import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveySummaryComponent } from './summary/summary.component';
import { SurveysRoutingModule } from './surveys.routing.module';
import { ListComponent } from './summary/list/list.component';
import { AngularMaterialModule } from '../../shared/modules/material.module';

@NgModule({
  declarations: [
    SurveyCreatorComponent,
    SurveySummaryComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SurveyCreatorModule,
    AngularMaterialModule,
    SurveysRoutingModule,
  ]
})
export class SurveysModule { }
