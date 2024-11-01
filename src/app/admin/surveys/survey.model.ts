export interface SurveyDefinition {
    id: string;
    name: string;
    json: string
}

export interface Survey {
    title?: string;
    pages: SurveyPage[]
}

export interface SurveyPage {
    name: string;
    elements: SurveyElemnt[];
}

export interface SurveyElemnt {
    type: string;
    name: string;
    title: string;
}