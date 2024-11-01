import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyDefinition } from './survey.model';
import { Injectable } from '@angular/core';
import { PatchCommand } from '../../shared/models/patch-command.model';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    protected apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = 'https://enlinqdsurveymanager.azurewebsites.net/api/Surveys';
    }

    public getAllSurveys(): Observable<SurveyDefinition[]> {
        return this.httpClient.get<SurveyDefinition[]>(`${this.apiUrl}/summary`);
    }

    public getSurveyById(surveyId: string): Observable<SurveyDefinition> {
        return this.httpClient.get<SurveyDefinition>(`${this.apiUrl}/${surveyId}`);
    }

    public addSurvey(survey: SurveyDefinition): Observable<SurveyDefinition> {
        return this.httpClient.post<SurveyDefinition>(this.apiUrl, survey);
    }

    public updateSurvey(surveyId: string, commands: PatchCommand[]): Observable<SurveyDefinition> {
        return this.httpClient.patch<SurveyDefinition>(`${this.apiUrl}/${surveyId}`, commands);
    }

    public deleteSurvey(surveyId: string): Observable<SurveyDefinition> {
        return this.httpClient.delete<SurveyDefinition>(`${this.apiUrl}/${surveyId}`);
    }
}