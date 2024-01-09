import { combineReducers } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import countrySlice from './countrySlice'
import loadingReducer from './loadingSlice'
import moduleSlice from './moduleSlice'
import questionSlice from './questionSlice'
import surveySlice from './surveySlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  loading: loadingReducer,
  module:moduleSlice,
  user:userSlice,
  survey:surveySlice,
  country:countrySlice,
  category:categorySlice,
  question:questionSlice,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer