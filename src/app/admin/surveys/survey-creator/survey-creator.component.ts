import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyService } from '../survey-api.service';
import { SurveyDefinition } from '../survey.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PatchCommand } from '../../../shared/models/patch-command.model';
import { LoaderService } from '../../../shared/services/loader.service';
import Utils from '../../../shared/components/utils';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit {

  private creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
  };
  public surveyCreatorModel: SurveyCreatorModel = new SurveyCreatorModel(this.creatorOptions);
  private surveyId: string = "";
  private originalSurveyById: SurveyDefinition = { id: '', json: '', name: '' };
  private patchCommands: PatchCommand[] = [];


  constructor(
    private surveysApi: SurveyService,
    private route: ActivatedRoute,
    private loaderService: LoaderService) {

    this.route.params.subscribe((params: Params) => {
      this.surveyId = params['id'];
    });
  }

  public ngOnInit() {

    const creator = new SurveyCreatorModel(this.creatorOptions);

    if (this.surveyId?.length > 0) {

      this.surveysApi.getSurveyById(this.surveyId).subscribe({
        next: (res) => {
          this.originalSurveyById = res;
          creator.text = res.json;
          this.surveyCreatorModel = creator;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.loaderService.hide();
        },
      });
    } else {
      creator.text = '';
      // creator.saveSurveyFunc = (surveyId: string, callback: Function) => {
      //   // If you use localStorage:
      //   window.localStorage.setItem("survey-json", creator.text);
      //   callback(surveyId, true);

      //   // If you use a web service:
      //   this.saveSurveyJson(creator.JSON, surveyId, callback);
      // };
      this.surveyCreatorModel = creator;
    }
  }

  private jsonParser(str: string) {
    let parsed = JSON.parse(str);
    if (typeof parsed === 'string') {
      parsed = this.jsonParser(parsed);
    }
    return parsed;
  }

  public saveSurvey(): void {
    if (this.surveyId) {
      this.saveSurveyJson(this.surveyCreatorModel, this.surveyId);
    } else {
      const surveyId = Utils.GenerateGUID();
      this.saveSurveyJson(this.surveyCreatorModel, surveyId);
    }
  }

  private saveSurveyJson(model: SurveyCreatorModel, surveyId: string) {

    const surveyJson = model?.JSON;
    const nameOrTitle: string = this.getTitle(surveyJson);

    if (nameOrTitle?.length <= 0) {
      alert('please enter a name before saving');
    } else {

      const payload: SurveyDefinition = {
        id: surveyId,
        json: JSON.stringify(surveyJson),
        name: nameOrTitle
      };

      if (!this.surveyId) {

        this.loaderService.show();
        this.surveysApi.addSurvey(payload).subscribe({
          next: () => {
            alert("Save Success");
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            this.loaderService.hide();
          }
        });
      } else {

        const originalNameOrTitle: string = this.getTitle(this.originalSurveyById);

        if (!Utils.caseInsensitiveEqualMatch(originalNameOrTitle, nameOrTitle)) {

          this.patchCommands.push({
            command: 'UpdateTitle',
            value: nameOrTitle,
            patchCommandFilters: [
              {
                filter: 'surveyId',
                value: this.surveyId
              }
            ]
          });
        }

        if (surveyJson != this.jsonParser(this.originalSurveyById.json)) {

          this.patchCommands.push({
            command: 'UpdateSurvey',
            value: JSON.stringify(surveyJson),
            patchCommandFilters: [
              {
                filter: 'surveyId',
                value: this.surveyId
              }
            ]
          });
        }

        if (this.patchCommands?.length > 0) {
          this.surveysApi.updateSurvey(this.surveyId, this.patchCommands).subscribe({
            next: () => {
              alert("Save Success");
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              this.loaderService.hide();
            }
          });
        }
      }
    }
  }

  private getTitle(surveyJson: any): string {
    const nameOrTitle: string =
      Object.keys(surveyJson)?.indexOf('title') > -1
        && surveyJson['title']?.length > 0 ? surveyJson['title'] : '';

    return nameOrTitle;
  }
}
