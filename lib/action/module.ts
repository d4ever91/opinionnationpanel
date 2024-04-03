import { Module } from '@/lib/constants/module'
import nodepress from '@/lib/services/nodepress'
import { get  } from '@/lib/store/moduleSlice';
import { AppThunk } from '@/lib/store';

export const AUTH_API_PATH = {
  GET: '/app/module',
  //CREATE: '/app/module',
}
export const getModules = (): AppThunk => async dispatch => {{
    return nodepress.get<Module>(AUTH_API_PATH.GET).then((response) => {
       var modules: any =response.result ? response.result : response;
       dispatch(get({modules}));
    });
  }
}
