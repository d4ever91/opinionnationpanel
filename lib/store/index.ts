import { Action, configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@/lib/store/rootReducer'
import { ThunkAction } from 'redux-thunk'

const store = configureStore({
      reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store