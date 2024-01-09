export interface QuestionOption {
    optionId:string,
    title:string,
    enable:boolean,
    validate:boolean,
}
export interface Question {
  _id:string,
  moduleKey: string,
  category:string,
  questionName: string,
  questionType:number,
  questionOption?:QuestionOption[],
  isActive: boolean,
  isDeleted:boolean,
}




