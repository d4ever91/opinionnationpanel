import { Verification } from '@/lib/constants/auth';
import { User } from '@/lib/constants/user'
import nodepress from '@/lib/services/nodepress'
import { load, get, add, remove ,single,update} from '@/lib/store/userSlice';
import { AppThunk } from '@/lib/store';

export const USER_API_PATH = {
  GET: '/app/user',
  GETONE: '/app/user/get',
  GET_TOKEN: '/app/code',
  GET_RESET_TOKEN: '/app/reset/code',
  CREATE: '/app/user/add',
  UPDATE: '/app/user/update',
  UPDATE_PASSWORD: '/app/password/update',
  REMOVE: '/app/user/remove',
}

export const getUsers = (filters:any): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.post<User>(USER_API_PATH.GET,filters).then((response) => {
      var result: any = response.result ? response.result : response;
      dispatch(get( result ))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const getUsersList = (): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<User>(USER_API_PATH.GET).then((response) => {
      var result: any = response.result ? response.result : response;
      dispatch(get(result))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const getUser = (id:string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<User>(USER_API_PATH.GETONE+'/'+id).then((response) => {
      var result: any = response.result ? response.result : response;
      dispatch(single( result ))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const getUserByToken = (token:string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<User>(USER_API_PATH.GET_TOKEN+'?token='+token).then((response) => {
      var result: any = response.result ? response.result : response;
      dispatch(single(result))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}
export const getUserByResetToken = (token:string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.get<User>(USER_API_PATH.GET_RESET_TOKEN+'?token='+token).then((response) => {
      var result: any = response.result ? response.result : response;
      dispatch(single(result))
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const addUser = (user: User): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.post<User>(USER_API_PATH.CREATE, user).then((response) => {
      var user: any = response.result ? response.result : response;
      dispatch(add(user));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const updateUser = (id:string,user: User): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.put<User>(USER_API_PATH.UPDATE+'/'+id, user).then((response) => {
      var user: any = response.result ? response.result : response;
      dispatch(update(user));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const updateUserPassword = (code:string,user: Verification): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.put<User>(USER_API_PATH.UPDATE_PASSWORD+'/'+code, user).then((response) => {
      var user: any = response.result ? response.result : response;
      dispatch(update(user));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}

export const removeUser = (_id: string): AppThunk => async dispatch => {
  {
    dispatch(load(true));
    return nodepress.delete<User>(USER_API_PATH.REMOVE + '/' + _id).then((response) => {
      var user: any = response.result ? response.result : response;
      dispatch(remove(user));
    }).catch((e) => {
      dispatch(load(false));
    });
  }
}


