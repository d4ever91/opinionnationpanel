import nodepress from '@/lib/services/nodepress'
import { get,single  } from '@/lib/store/categorySlice';
import { AppThunk } from '@/lib/store';
import { Country } from '@/lib/constants/country';

export const COUNTRY_API_PATH = {
  
  GET: '/app/category',
  CREATE: '/app/category',
}
export const getCategoriesList = (): AppThunk => async dispatch => {{
    return nodepress.get<Country>(COUNTRY_API_PATH.GET).then((response) => {
      var countries: any = response.result ? response.result : response;
       dispatch(get(countries));
    });
  }
}

export const getCategory = (id:string): AppThunk => async dispatch => {{
  return nodepress.get<Country>(COUNTRY_API_PATH.GET+`/${id}`).then((response) => {
    var category: any = response.result ? response.result : response;
     dispatch(single(category));
  });
}
}
