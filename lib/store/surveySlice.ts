import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Survey } from "@/lib/constants/survey";
import { Country } from "@/lib/constants/country";
import { User } from "@/lib/constants/user";

export interface SurveyPayload {
  isLoading?: boolean,
  surveys?: Survey[];
  survey?: Survey;
  countries?: Country[];
  users?: User[];
  statuses?:any;
  meta?: any
}

const initialState: SurveyPayload = {
  isLoading: false,
  surveys: [],
  countries:[],
  users:[],
  survey: {},
  statuses:[],
  meta: { total: 0, limit: 0, pageNo: 1 },
}

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    load(state, action: PayloadAction<boolean>) {
      state = { ...state, isLoading: action.payload }
      return state
    },
    get(state, action: PayloadAction<SurveyPayload>) {
      state = { statuses: action.payload.statuses, surveys: action.payload.surveys  ,users: action.payload.users,countries: action.payload.countries, meta: action.payload.meta, isLoading: false }
      return state
    },
    single(state, action: PayloadAction<Survey>) {
      state = { ...state, survey: action.payload, isLoading: false }
      return state
    },
    add(state, action: PayloadAction<Survey>) {
      state = { surveys: [...state.surveys, action.payload ], isLoading: false }
      return state
    },
    update(state, action: PayloadAction<Survey>) {
      state = { ...state,surveys: [ ...state.surveys.filter(user => user._id !== action.payload._id ), action.payload], isLoading: false }
      return state
    },
    remove(state, action: PayloadAction<Survey>) {
      state = { surveys: state.surveys.filter(user => user._id !== action.payload._id), meta: { ...state.meta, total: state.meta.total - 1 }, isLoading: false }
      return state
    },
  },
});

export const { load, single, get, add, update, remove } = surveySlice.actions;
export default surveySlice.reducer;