import nodepress from '@/lib/services/nodepress'
import { load, get, add, remove ,single,update} from '@/lib/store/surveySlice';
import { AppThunk } from '@/lib/store';
import { Survey } from '@/lib/constants/survey';

export const SURVEY_API_PATH = {
  GET: '/app/survey',
  GETONE: '/app/survey/get',
  CREATE: '/app/survey/add',
  UPDATE: '/app/survey/update',
  REMOVE: '/app/survey/remove',
  STATUS: '/app/survey/status',
}

export const getSurveys = (filters:any): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.post<Survey>(SURVEY_API_PATH.GET,filters).then((response) => {
      var result: any = response.result;
      dispatch(get(result))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const getSurveysList = (): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<Survey>(SURVEY_API_PATH.GET).then((response) => {
      var result: any = response.result;
      dispatch(get(result))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const getSurvey = (id:string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<Survey>(SURVEY_API_PATH.GETONE+'/'+id).then((response) => {
      var result: Survey = response.result;
      dispatch(single( result ))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const addSurvey = (user: Survey): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.post<Survey>(SURVEY_API_PATH.CREATE, user).then((response) => {
      var survey: Survey = response.result;
      dispatch(add(survey));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const updateSurvey = (id:string,user: Survey): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.put<Survey>(SURVEY_API_PATH.UPDATE+'/'+id, user).then((response) => {
      var survey: Survey = response.result;
      dispatch(update(survey));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const removeSurvey = (_id: string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.delete<Survey>(SURVEY_API_PATH.REMOVE + '/' + _id).then((response) => {
      var survey: Survey = response.result;
      dispatch(remove(survey));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}


