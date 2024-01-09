export interface Survey {
  _id?:string,
  surveyCode?: string,
  surveyName?: string,
  loi?: number,
  cpi?:number,
  cost?: number,
  conversion?: number,
  user?: string,
  country?: string,
  countryCode?:string,
  category?: string,
  createdBy?: string,
  surveyStatus?: number,
  surveyLiveUrl?:string,
  surveyTestUrl?:string,
  startDate?: Date,
  endDate?: Date,
  isActive?: boolean,
  isDeleted?:boolean,
}


export interface SurveyPayload {
  survey?:Survey,
}


export const SurveyStatus =
  [{ label: "Active", value: 1, color: 'blue' },
  { label: "Paused", value: 2, color: 'blue' },
  { label: "Draft", value: 3, color: 'blue' }
 , { label: "Closed", value: 4, color: 'blue' }]



