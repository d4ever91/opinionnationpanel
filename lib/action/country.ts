import nodepress from '@/lib/services/nodepress'
import { get  } from '@/lib/store/countrySlice';
import { AppThunk } from '@/lib/store';
import { Country } from '@/lib/constants/country';

export const COUNTRY_API_PATH = {
  GET: '/app/country',
  CREATE: '/app/country',
}
export const getCountriesList = (): AppThunk => async dispatch => {{
    return nodepress.get<Country>(COUNTRY_API_PATH.GET).then((response) => {
      var countries: any = response.result ? response.result : response;
       dispatch(get(countries));
    });
  }
}
