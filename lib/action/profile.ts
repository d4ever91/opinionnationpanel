import nodepress from '@/lib/services/nodepress'

export const QUESTION_API_PATH = {
  POST: '/app/profile/question/update',
}
export  function updateProfileQuestion(id:string, body:any) {
  {
    return nodepress.post<any>(QUESTION_API_PATH.POST + `/${id}`, body).then((response) =>{ 
      return  response.result ? response.result : response;
    });
  }
}
