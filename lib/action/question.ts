import nodepress from '@/lib/services/nodepress'
import { get  } from '@/lib/store/questionSlice';
import { AppThunk } from '@/lib/store';
import { Question } from '@/lib/constants/question';

export const QUESTION_API_PATH = {
  GET: '/app/profile/question',
}
export const getQuestionList = (id): AppThunk => async dispatch => {{
    return nodepress.get<Question>(QUESTION_API_PATH.GET+`/${id}`).then((response) => {
      var countries: any = response.result;
       dispatch(get(countries));
    });
  }
}
